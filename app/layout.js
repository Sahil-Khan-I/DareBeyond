import localFont from "next/font/local";
import "./globals.css";

// Define custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "DareBeyond | Elevate Your Potential",  // Updated title to match the site's purpose
  description: "Push your boundaries with transformative challenges designed for personal growth.",  // Updated description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can add additional meta tags or links here if needed */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-blue-50 to-white text-gray-900`}
      >
        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
