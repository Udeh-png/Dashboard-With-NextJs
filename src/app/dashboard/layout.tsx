import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
  profile,
  progress,
  timeTracker,
  onBoarding,
  perks,
  calender,
}: Readonly<{
  children: React.ReactNode;
  profile: React.ReactNode;
  progress: React.ReactNode;
  timeTracker: React.ReactNode;
  onBoarding: React.ReactNode;
  perks: React.ReactNode;
  calender: React.ReactNode;
}>) {
  return (
    <div className="">
      <header className="mb-4">
        <Navbar />
      </header>
      <main className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-[1fr_2fr_1fr] gap-1">
          <div className="grid grid-rows-[1fr_1fr] gap-1">
            {profile}
            {perks}
          </div>

          <div className="grid grid-rows-[1fr_1fr] gap-1">
            <div className="grid grid-cols-[1fr_1fr] gap-1">
              {progress}
              {timeTracker}
            </div>
            <div className="grid">{calender}</div>
          </div>

          <div className="grid">{onBoarding}</div>
        </div>

        <div>{children}</div>
      </main>
    </div>
  );
}
