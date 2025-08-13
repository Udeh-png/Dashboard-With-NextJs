import { Card } from "@/components/Card";
import DottedLine from "@/components/DottedLine";
import { LineOfGraph } from "@/components/LineOfGraph";
import RoundButton from "@/components/RoundButton";
import { moddedRounder } from "@/utils/ModdedRounder";

export default function ProgressPage() {
  const data = [
    {
      dayOfTheWeek: "Sunday",
      workTimeInSeconds: Math.floor(Math.random() * 10800 + 3600),
    },
    {
      dayOfTheWeek: "Monday",
      workTimeInSeconds: Math.floor(Math.random() * 10800 + 3600),
    },
    {
      dayOfTheWeek: "Tuesday",
      workTimeInSeconds: Math.floor(Math.random() * 10800 + 3600),
    },
    {
      dayOfTheWeek: "Wednesday",
      workTimeInSeconds: Math.floor(Math.random() * 10800 + 3600),
    },
    {
      dayOfTheWeek: "Thursday",
      workTimeInSeconds: Math.floor(Math.random() * 10800 + 3600),
    },
    {
      dayOfTheWeek: "Friday",
      workTimeInSeconds: Math.floor(Math.random() * 10800 + 3600),
    },
    {
      dayOfTheWeek: "Saturday",
      workTimeInSeconds: Math.floor(Math.random() * 10800 + 3600),
    },
  ];

  let totalWorkTimeInSec: number = 0;
  data.forEach((data) => {
    totalWorkTimeInSec += data.workTimeInSeconds;
  });

  const maxData = Math.max(...data.map((item) => item.workTimeInSeconds));
  const percentages = data.map(
    (value) => (value.workTimeInSeconds / maxData) * 100 // ((value - oldMin) / (oldMax - oldMin) * (newMax - newMin)) + newMin
  );

  const totalWorkTimeInHrs = moddedRounder(totalWorkTimeInSec / 3600, 1);

  return (
    <Card>
      <div>
        <div className="flex justify-between">
          <p>Progress</p>
          <RoundButton></RoundButton>
        </div>

        <div className="flex gap-x-3">
          <p className="text-4xl">{totalWorkTimeInHrs}h</p>
          <p className="text-[13px]">
            Work Time <br /> this week
          </p>
        </div>

        <div className="flex gap-4 justify-center relative">
          {data.map(({ dayOfTheWeek, workTimeInSeconds }, index) => {
            const isHighest = maxData === workTimeInSeconds;
            const top = 110 - percentages[index];

            return (
              <div className="flex flex-col items-center relative" key={index}>
                <LineOfGraph top={top} color={isHighest ? "orange" : "black"} />
                {isHighest && (
                  <span
                    className={`text-[11px] w-[46px] text-center bg-orange-400/70 text-black z-20 rounded-full absolute -left-[4.5px] rotate-90`}
                    style={{ top: `${top + 10}px` }}
                  >
                    {Math.floor(workTimeInSeconds / 3600)}h{" "}
                    {Math.floor(workTimeInSeconds / 60) % 60}m
                  </span>
                )}
                <p className="text-xs">{dayOfTheWeek.charAt(0)}</p>
              </div>
            );
          })}

          <DottedLine
            orientation="horizontal"
            color="rgba(0,0,0,0.2)"
            className="absolute top-1/2 -translate-y-1 -z-10 left-5 right-5"
          />
        </div>
      </div>
    </Card>
  );
}
