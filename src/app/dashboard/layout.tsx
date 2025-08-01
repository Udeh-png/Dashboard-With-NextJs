export default function RootLayout({
  children,
  profile,
  progress,
  timeTracker,
  onBoarding,
  pensionContribution,
  calender,
}: Readonly<{
  children: React.ReactNode;
  profile: React.ReactNode;
  progress: React.ReactNode;
  timeTracker: React.ReactNode;
  onBoarding: React.ReactNode;
  pensionContribution: React.ReactNode;
  calender: React.ReactNode;
}>) {
  return (
    <div className="">
      <header className="h-10">
        <h1>Dashboard</h1>
      </header>
      <main className="">
        <div className="grid grid-cols-[1fr_2fr_1fr] gap-1">
          <div className="grid grid-rows-[1fr_1fr] gap-1">
            {profile}
            {pensionContribution}
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
      </main>
    </div>
  );
}
