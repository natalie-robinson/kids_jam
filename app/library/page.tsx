'use client'

import Background from "../components/Background";
import { useState, useMemo } from 'react'
import Navbar from "../components/Navbar";
import { SONG_URL_DICTIONARY, formatFileName } from "@/lib/songDictionary";

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState('')

  // Transform dictionary into an alphabetically sorted song list
  const songs = useMemo(() => {
    return Object.entries(SONG_URL_DICTIONARY)
      .map(([key, url]) => ({
        key,
        title: formatFileName(key),
        url,
      }))
      .sort((a, b) => a.title.localeCompare(b.title));
  }, []);

  // Filter songs based on search input
  const filteredSongs = useMemo(() => {
    return songs.filter((song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [songs, searchQuery]);

  return (
    <main className="relative min-h-svh">
      <Background />
      <Navbar />

      <div className="container mx-auto px-4 pt-36 pb-16 relative z-10 max-w-6xl">
        {/* Page Header */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-200 tracking-tight transition-all duration-300 [filter:drop-shadow(0_0_8px_rgba(0,0,0,0.95))] group-hover:text-cyan-300 group-hover:[filter:drop-shadow(0_0_12px_rgba(251,191,36,0.4))]">
            Song Library
          </h1>
          <p className="text-yellow-200 mt-1 font-medium transition-all duration-300 [filter:drop-shadow(0_0_8px_rgba(0,0,0,0.95))] group-hover:text-cyan-300 group-hover:[filter:drop-shadow(0_0_12px_rgba(251,191,36,0.4))]">
            Links to publicly available arrangements
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-80 mx-auto mb-8">
          <input
            type="text"
            placeholder="Search songs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-black/80 border border-amber-500/30 rounded-xl text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-400 transition text-sm shadow-md"
          />
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-200/60 text-sm">
            🔍
          </span>
        </div>

        {/* Empty Search Result State */}
        {filteredSongs.length === 0 ? (
          <div className="text-center py-16 text-amber-200/80 font-medium">
            No songs match "{searchQuery}"
          </div>
        ) : (
          /* Song Cards Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSongs.map((song) => (
              <a
                key={song.key}
                href={song.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 bg-black/40 backdrop-blur-md border border-amber-500/20 hover:border-amber-400/50 rounded-2xl shadow-lg transition-all duration-300 hover:bg-black/50 group cursor-pointer"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0 mr-3">
                  <span className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                    🎼
                  </span>
                  <span
                    className="font-semibold text-sm md:text-base text-amber-50 truncate group-hover:text-amber-300 transition-colors"
                    title={song.title}
                  >
                    {song.title}
                  </span>
                </div>

                <span className="px-3.5 py-2 text-xs font-bold bg-amber-500 group-hover:bg-amber-400 text-stone-950 rounded-xl transition-all shadow shrink-0 flex items-center gap-1">
                  View ↗
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}