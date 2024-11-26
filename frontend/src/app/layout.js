import localFont from "next/font/local";
import "./globals.css";
import NewScheduleModal from "@/components/modals/newScheduleModal";
import NewDisciplineModal from "@/components/modals/newDisciplineModal";
import { Toaster } from "react-hot-toast";

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
  title: "Olympic Games",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <NewScheduleModal />
        <NewDisciplineModal />
        <header className="bg-slate-700">
          <div className="container relativer m-auto flex items-center justify-between min-h-28">
            <h1 className="text-4xl font-paris text-white">
              Olympic Games 2024
            </h1>
            <img className="w-20 absolute left-1/2 -translate-x-1/2" src="https://olympics.com/_pr/topic-assets/paris-2024/emblem-oly.svg" />
            <img className="w-20" src="	https://olympics.com/images/static/b2p-images/logo_color.svg" />
          </div>
          {<div className="container m-auto">
            <nav>
              <a href="/schedules" className="text-white">Schedules</a>
              <a href="/events" className="text-white">Events</a>
              <a href="/athletes" className="text-white">Athletes</a>
              <a href="/medals" className="text-white">Medals</a>
            </nav>
          </div>}
        </header>
        {children}
      </body>
    </html>
  );
}
