import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Louisville Kids Jam",
  description: "Join us for the next Louisville Kids Jam session!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}