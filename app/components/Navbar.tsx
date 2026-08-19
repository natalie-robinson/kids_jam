"use client";

import { usePathname } from "next/navigation";
import HamburgerMenu from "@/app/components/HamburgerMenu"; 

type NavLink = { label: string; href: string; disabled?: boolean };

const MENU_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Song library", href: "/library" },
  { label: "Suggest a song", href: "/suggest" },
  { label: "Contact", href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}` },
  { label: "Sign up for emails", href: "/signup", disabled: true },
];

export default function Navbar() {
  const pathname = usePathname();

  const greeting = "Louisville Kids Jam";
  const subtext = "A welcoming community for kids to explore bluegrass jams";

  // Remove "Home" link if current path is strictly "/"
  const filteredLinks = MENU_LINKS.filter(
    (link) => !(link.href === "/" && pathname === "/")
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-[#04141c]/70 backdrop-blur-md border-b border-white/10 px-6 py-5 flex items-center justify-between shadow-lg">
      {/* Dark Ribbon Header */}
        <div className="w-10" />
            <div className="text-center">
                <h1 className="text-white text-lg md:text-4xl font-bold tracking-wide leading-tight">
                {greeting}
                </h1>
                <p className="text-white/70 text-medium md:text-lg font-sans pt-2">
                {subtext}
                </p>
        </div>

        <HamburgerMenu
            items={filteredLinks}
        />
    </header>
  );
}