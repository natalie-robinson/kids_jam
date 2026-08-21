import React from "react";

// --- Types ---
export type NoteType =
  | "quarter"
  | "eighth"
  | "beamed-eighth"
  | "triplet";

interface IconProps {
  className?: string;
}

interface MusicNoteProps {
  type?: NoteType;
  icon?: React.ReactNode;
  label?: string;
  className?: string;
  href?: string;
}

// --- 1. Quarter Note Icon (1/4) ---
export function QuarterNoteIcon({ className = "w-full h-full" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {/* Notehead */}
      <ellipse cx="8.5" cy="16.5" rx="3" ry="2.2" transform="rotate(-25 8.5 16.5)" />
      {/* Stem */}
      <rect x="10.7" y="3.5" width="1.6" height="13.2" rx="0.5" />
    </svg>
  );
}

// --- 2. Single Eighth Note Icon (1/8) ---
export function EighthNoteIcon({ className = "w-full h-full" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {/* Notehead */}
      <ellipse cx="7.5" cy="16" rx="2.8" ry="2" transform="rotate(-25 7.5 16)" />
      {/* Stem */}
      <rect x="9.5" y="4" width="1.5" height="12.2" rx="0.5" />
      {/* Flag */}
      <path d="M 11 4 C 14.5 6.5 14.8 11 11 13.5 C 13.2 10.5 12.8 7 11 4 Z" />
    </svg>
  );
}

// --- 3. Beamed Eighth Notes Icon (Two 1/8 notes connected at top) ---
export function BeamedEighthNotesIcon({ className = "w-full h-full" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {/* Left Notehead */}
      <ellipse cx="6" cy="16" rx="2.5" ry="1.8" transform="rotate(-25 6 16)" />
      {/* Right Notehead */}
      <ellipse cx="16" cy="16" rx="2.5" ry="1.8" transform="rotate(-25 16 16)" />
      {/* Stems */}
      <rect x="7.6" y="5" width="1.4" height="11" />
      <rect x="17.6" y="5" width="1.4" height="11" />
      {/* Beam */}
      <polygon points="7.6,5 19,5 19,7.5 7.6,7.5" />
    </svg>
  );
}

// --- 4. Triplet Eighth Notes Icon (3 notes + top beam + "3") ---
export function TripletIcon({ className = "w-full h-full" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {/* Three Noteheads */}
      <ellipse cx="4.2" cy="17.5" rx="2" ry="1.4" transform="rotate(-25 4.2 17.5)" />
      <ellipse cx="11.7" cy="17.5" rx="2" ry="1.4" transform="rotate(-25 11.7 17.5)" />
      <ellipse cx="19.2" cy="17.5" rx="2" ry="1.4" transform="rotate(-25 19.2 17.5)" />

      {/* Three Stems */}
      <rect x="5.4" y="8" width="1.2" height="9.5" />
      <rect x="12.9" y="8" width="1.2" height="9.5" />
      <rect x="20.4" y="8" width="1.2" height="9.5" />

      {/* Beam */}
      <polygon points="5.4,8 21.6,8 21.6,10 5.4,10" />
    </svg>
  );
}

// --- Helper to pick icon by type ---
export function getNoteIcon(type: NoteType, className = "w-full h-full") {
  switch (type) {
    case "quarter":
      return <QuarterNoteIcon className={className} />;
    case "eighth":
      return <EighthNoteIcon className={className} />;
    case "beamed-eighth":
      return <BeamedEighthNotesIcon className={className} />;
    case "triplet":
      return <TripletIcon className={className} />;
  }
}

// --- Main MusicNote / Hex Button Component ---
export default function MusicNote({
  type = "quarter",
  icon,
  label,
  className = "",
  href,
}: MusicNoteProps) {
  const renderedIcon = icon || getNoteIcon(type, "w-full h-full");

  const content = (
    <div className="hex-shape">
      <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 p-3 sm:p-10">
        {/* Icon with subtle hover scale, color shift, and ambient shadow */}
        <span className="w-7 h-7 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center text-cyan-400 transition-all duration-300 group-hover:text-violet-300 group-hover:scale-115 [filter:drop-shadow(0_0_6px_rgba(0,0,0,0.8))] group-hover:[filter:drop-shadow(0_0_10px_rgba(251,191,36,0.5))]">
          {renderedIcon}
        </span>
        {label && (
          /* Text with subtle warm color transition & soft amber glow enhancement */
          <span className="text-xl sm:text-4xl text-yellow-200 font-bold tracking-widest text-left leading-tight pointer-events-none transition-all duration-300 [filter:drop-shadow(0_0_8px_rgba(0,0,0,0.95))] group-hover:text-cyan-300 group-hover:[filter:drop-shadow(0_0_12px_rgba(251,191,36,0.4))]">
            {label}
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className={`hex-container group ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <div className={`hex-container group ${className}`}>
      {content}
    </div>
  );
}