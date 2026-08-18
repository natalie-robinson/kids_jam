"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

function isMailtoLink(href: string): boolean {
  return href.startsWith("mailto:");
}

export interface MenuItem {
  label: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

interface HamburgerMenuProps {
  items: MenuItem[];
}

export default function HamburgerMenu({ items }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="relative">
      {/* Animated Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
        aria-label="Toggle Menu"
        aria-expanded={isOpen}
      >
        {/* Fixed-size Icon Container */}
        <div className="relative w-8 h-6">
          {/* Top Line */}
          <span
            className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
              isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
            }`}
          />
          {/* Middle Line */}
          <span
            className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
              isOpen ? "opacity-0 scale-x-0" : "opacity-100"
            }`}
          />
          {/* Bottom Line */}
          <span
            className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
              isOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
            }`}
          />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-amber-50/95 backdrop-blur-sm rounded-xl shadow-xl py-2 z-30 border border-amber-200/50">
          {items.map((item) =>
            item.disabled ? (
              <span
                key={item.label}
                className="block px-4 py-2 text-amber-900/40 cursor-not-allowed text-medium"
              >
                {item.label}
              </span>
            ) : item.onClick ? (
              <button
                key={item.label}
                onClick={() => {
                  setIsOpen(false);
                  item.onClick!();
                }}
                className="block w-full text-left px-4 py-2 text-amber-900 hover:bg-amber-100/80 transition-colors text-medium"
              >
                {item.label}
              </button>
            ) : item.href && isMailtoLink(item.href) ? (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-amber-900 hover:bg-amber-100/80 transition-colors text-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href || item.label}
                href={item.href!}
                className="block px-4 py-2 text-amber-900 hover:bg-amber-100/80 transition-colors text-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}