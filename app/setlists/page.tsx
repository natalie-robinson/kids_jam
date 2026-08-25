'use client'

import Background from "../components/Background";
import { useState, useMemo } from 'react'
import Navbar from "../components/Navbar";

// --- SONG DICTIONARY (URL MAP) ---
const SONGS_BY_DATE: Record<string, string[]> = {
 "08/23/2026": [
   "Salt Spring (A)", 
   "Angeline the Baker (D)", 
   "Salt Creek (A)", 
   "Whiskey Before Breakfast (D)", 
   "Blackberry Blossom (G)", 
   "Dark Hollow (G)", 
   "Cluck Old Hen (A)", 
   "Old Joe Clark (A)", 
   "Bury Me Beneath the Willow (D)", 
   "Sitting on Top of the World (G)", 
   "Dooley"
 ]
};

// Helper to extract key from song title for sorting
const songKey = (song: string) => {
    if (!song.includes('(')) return "";
    return song.match(/\(([^)]+)\)/)?.[1] ?? "";
};

// Helper to clean title (removes key from display name)
const cleanTitle = (song: string) => {
    return song.replace(/\s*\([^)]*\)/, '').trim();
};

export default function SetlistPage() {
  const [searchQuery, setSearchQuery] = useState('')

  // Transform dictionary into key-first sorted song list
  const songs_by_date = useMemo(() => {
    return Object.entries(SONGS_BY_DATE)
      .map(([date, songs]) => ({
        date: date,
        songs: songs
          .map((song) => ({
            raw: song,
            title: cleanTitle(song),
            key: songKey(song)
          }))
          .sort((a, b) => {
            // Sort by Key first
            const keyCompare = a.key.localeCompare(b.key);
            if (keyCompare !== 0) return keyCompare;
            // Then sort by Title second
            return a.title.localeCompare(b.title);
          })
      }))
  }, []);

  return (
    <main className="relative min-h-svh">
      <Background />
      <Navbar />

      <div className="container mx-auto px-4 pt-36 pb-16 relative z-10 max-w-6xl">
        {/* Page Header */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-200 tracking-tight transition-all duration-300 [filter:drop-shadow(0_0_8px_rgba(0,0,0,0.95))]">
            Set lists from past jams
          </h1>
        </div>

        {/* Set List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {songs_by_date.map((setlist) => (
            <div key={setlist.date} className="bg-black/40 backdrop-blur-md border border-amber-500/20 rounded-2xl shadow-lg overflow-hidden">
              <div className="p-4 border-b border-amber-500/20">
                <h2 className="text-xl font-bold text-amber-50">{setlist.date}</h2>
              </div>
              <div className="p-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-amber-500/10 text-xs uppercase tracking-wider text-amber-400/70">
                      <th className="pb-2 pl-1 pr-3 w-16">Key</th>
                      <th className="pb-2 pr-1">Song Title</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-0">
                    {setlist.songs.map((song) => (
                      <tr key={song.raw} className="hover:bg-amber-500/5 transition-colors">
                        <td className="py-1.5 pl-1 pr-3 text-amber-300 font-semibold text-sm">
                          {song.key || "—"}
                        </td>
                        <td className="py-1.5 pr-1 text-amber-50 text-sm">
                          {song.title}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}