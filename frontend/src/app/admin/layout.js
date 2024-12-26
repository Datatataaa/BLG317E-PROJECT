import localFont from "next/font/local";
import "../globals.css";
import NewScheduleModal from "@/components/modals/newScheduleModal";
import NewDisciplineModal from "@/components/modals/newDisciplineModal";
import NewMedallistModal from "@/components/modals/newMedallistModal";
import { Toaster } from "react-hot-toast";
import { Button } from "@/components/button";
import { deleteCookie } from "cookies-next";
import UpdateScheduleGroupModal from "@/components/modals/updateScheduleGroupModal";
import NewCountryModal from "@/components/modals/newCountryModal";
import NewTeamModal from "@/components/modals/newTeamModal";
import NewAthleteModal from "@/components/modals/newAthleteModal";
import NewCoachModal from "@/components/modals/newCoachModal";
import NewEventModal from "@/components/modals/newEventModal";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
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
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <Toaster />
      <NewScheduleModal />
      <NewDisciplineModal />
      <NewMedallistModal />
      <NewCountryModal />
      <UpdateScheduleGroupModal />
      <NewTeamModal />
      <NewAthleteModal />
      <NewCoachModal />
      <NewEventModal />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full h-[100vh] flex flex-col">
          <header className="bg-slate-700 sticky top-0 z-50">
            <div className="container relativer m-auto flex items-center justify-center min-h-28">
              <a
                className="text-4xl font-paris text-white cursor-pointer"
                href="/admin"
              >
                Olympic Games 2024 Management Panel
              </a>
            </div>
            <div className="container m-auto">
              <nav className="flex space-x-4 h-10 justify-center items-center">
                <a
                  href="/admin/schedules"
                  className="text-white hover:tracking-wider duration-300 px-4 box-border"
                >
                  Schedules
                </a>
                <a
                  href="/admin/disciplines"
                  className="text-white hover:tracking-wider duration-300 px-4 box-border"
                >
                  Disciplines
                </a>
                <a
                  href="/admin/events"
                  className="text-white hover:tracking-wider duration-300 px-4 box-border"
                >
                  Events
                </a>
                <a
                  href="/admin/athletes"
                  className="text-white hover:tracking-wider duration-300 px-4 box-border"
                >
                  Athletes
                </a>
                <a
                  href="/admin/coaches"
                  className="text-white hover:tracking-wider duration-300 px-4 box-border"
                >
                  Coaches
                </a>
                <a
                  href="/admin/medallists"
                  className="text-white hover:tracking-wider duration-300 px-4 box-border"
                >
                  Medals
                </a>
                <a
                  href="/admin/teams"
                  className="text-white hover:tracking-wider duration-300 px-4 box-border"
                >
                  Teams
                </a>
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
