
import Background from "./components/Background";
import MusicNote from "./components/MusicNote";
import Navbar from "./components/Navbar";

export default async function HomePage() {
  const when = (
    <span>
      Next Jam:<br />
      August 23rd<br />
      4:00-5:30PM
    </span>
  );
  const where = (
    <span>
      Rowan's House<br />
      (contact for address)
    </span>
  );

  return (
    <main className="relative min-h-svh">
      {/* Background image */}
      <Background />

      {/* Navbar header */}
      <Navbar />
        
      {/* Music Note Buttons */}
      <MusicNote type="triplet" label="Song library" className="absolute top-[7rem] left-20" href="/library" />
      <MusicNote type="beamed-eighth" label="Suggest a song" className="absolute top-[12rem] left-20" href="/suggest" />
      <MusicNote type="quarter" label="Contact" className="absolute top-[17rem] left-20" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} />
      {/* <MusicNote type="quarter" label="Sign up for emails" className="absolute top-[22rem] left-20" /> */}

      {/* Event Details Text */}
      <div className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-sm px-5">
        <p
          className="text-cyan-300 font-semibold mb-2"
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.85rem)",
            textShadow: "0 2px 8px rgba(0,0,0,0.6)",
          }}
        >
          {when}
        </p>
        <p
          className="text-pink-300 leading-relaxed"
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.45rem)",
            textShadow: "0 2px 8px rgba(0,0,0,0.6)",
          }}
        >
          {where}
        </p>
      </div>
    </main>
  );
}