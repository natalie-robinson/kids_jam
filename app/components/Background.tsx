import Image from "next/image";

export default function Background() {
  return (
    <>
      {/* Background image */}
      <div className="fixed inset-0 -z-20">
        <Image
          // src="/fiddle.jpg"
          src="/bg_instruments.jpg"
          alt="Instruments background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(4,20,28,0.2) 0%, rgba(4,20,28,0.35) 40%, rgba(4,20,28,0.55) 100%)",
        }}
      />
    </>
  );
}

