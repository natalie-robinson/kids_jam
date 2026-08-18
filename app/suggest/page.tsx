'use client'

import Background from "../components/Background";
import { useState } from 'react'
import Navbar from "../components/Navbar";

const isValidUrl = (urlString: string): boolean => {
  try {
    const url = new URL(urlString);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};

export default function SuggestPage() {
  const [songName, setSongName] = useState('')
  const [url, setUrl] = useState('')
  const [email, setEmail] = useState('')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!songName.trim()) {
      setErrorMsg('Please enter a song name.');
      return;
    }

    if (!url.trim() || !isValidUrl(url)) {
      setErrorMsg('Please enter a valid URL.');
      return;
    }

    const recipient = process.env.EMAIL || '';
    const subject = encodeURIComponent('kids jam song request');
    
    let bodyContent = `Song Name: ${songName.trim()}\nURL: ${url.trim()}`;

    const body = encodeURIComponent(bodyContent);

    // Triggers user's native email client with pre-filled details
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="relative min-h-svh">
      <Background />
      <Navbar />

      <div className="container mx-auto px-4 pt-36 pb-16 relative z-10 max-w-6xl">
        <div className="mb-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-200 tracking-tight [filter:drop-shadow(0_0_8px_rgba(0,0,0,0.95))]">
            Suggest a song
          </h1>
          <p className="text-yellow-200 mt-1 font-medium [filter:drop-shadow(0_0_8px_rgba(0,0,0,0.95))]">
            you must provide a publicly available url for the song
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          {errorMsg && (
            <div className="mb-6 p-3.5 bg-red-950/80 border border-red-500/60 rounded-xl text-red-200 text-sm text-center font-medium">
              ⚠️ {errorMsg}
            </div>
          )}

          <div className="relative w-full mb-4">
            <input
              type="text"
              placeholder="Name of song"
              value={songName}
              onChange={(e) => setSongName(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-black/90 border border-amber-500/30 rounded-xl text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-400 text-sm shadow-md"
            />
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-200/60 text-sm">
              🎵
            </span>
          </div>

          <div className="relative w-full mb-4">
            <input
              type="text"
              placeholder="Public URL (e.g., https://...)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-black/90 border border-amber-500/30 rounded-xl text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-400 text-sm shadow-md"
            />
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-200/60 text-sm">
              🔗
            </span>
          </div>

          <div className="relative w-full mb-8">
            <input
              type="text"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-black/90 border border-amber-500/30 rounded-xl text-white placeholder-amber-200/50 focus:outline-none focus:border-amber-400 text-sm shadow-md"
            />
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-200/60 text-sm">
              ✉️
            </span>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow-md transition text-sm cursor-pointer"
            >
              Submit via Email ✉️
            </button> 
          </div>
        </form>
      </div>
    </main>
  );
}