import type { Metadata } from "next";
import "./globals.css";
import { Heebo } from "next/font/google";

// import { Navbar } from "./_components/navbar";
// import { Footer } from "./_components/footer";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kanpech tachavichitra",
  description: `Welcome to my portfolio! . Here, you'll find my projects,
              experiences, and the skills I’ve honed through years of coding,
              problem-solving, and collaboration.`,
  openGraph: { images: "/wallpaper-orange.png" },
};

const heebo = Heebo({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-dvh flex flex-col", heebo.className)}>
        {/* <Navbar /> */}
        <div className="flex-1">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
