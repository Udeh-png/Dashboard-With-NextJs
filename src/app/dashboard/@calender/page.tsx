import { Card } from "@/components/Card";
import DottedLine from "@/components/DottedLine";
import { FaCircleUser, FaRegCircleUser } from "react-icons/fa6";

export default function CalendarPage() {
  const today = new Date();
  const day = new Date(today);
  day.setDate(today.getDate() - day.getDay());
  const days = [];
  for (let i = 1; i <= 6; i++) {
    const thisWeek = new Date(day);
    thisWeek.setDate(day.getDate() + i);
    days.push(thisWeek);
  }

  return (
    <Card>
      <div className="h-full grid grid-rows-[1fr_8fr] gap-y-2">
        <div className="flex font-semibold justify-between">
          <button className="text-xs bg-white px-3 py-1 rounded-2xl">
            August
          </button>
          <p className="">September 2024</p>
          <button className="text-xs bg-white px-3 py-1 rounded-2xl">
            October
          </button>
        </div>
        <div className="">
          <div className="flex justify-between text-sm text-center text-gray font-semibold">
            {/* Day of the week container */}
            <div className=""></div>
            {days.map((date, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    date.getDate() === today.getDate() ? "text-black" : ""
                  } relative`}
                >
                  {date.toLocaleDateString("en-US", { weekday: "short" })}
                  <br /> {date.getDate()}
                  <DottedLine
                    orientation="vertical"
                    color="rgba(0,0,0,0.2)"
                    className="absolute top-[120%] left-1/2 -translate-x-[2px]"
                  />
                </div>
              );
            })}
          </div>

          <div className="h-[82%] flex ">
            <div className="flex flex-col h-full justify-between text-xs flex-1 items-center pb-3">
              <div className=""></div>
              <div>8:00 am</div>
              <div>9:00 am</div>
              <div>10:00 am</div>
              <div>11:00 am</div>
            </div>

            <div className="full w-full flex-10 relative">
              <div className="absolute p-2.5 top-10 left-15 w-60 rounded-2xl h-12 bg-black text-white grid grid-cols-[1.5fr_1fr]">
                <div>
                  <p className="text-xs">Weekly Team Sync</p>
                  <p className="text-[10px] text-gray">
                    Discuss progress on projects
                  </p>
                </div>

                <div className="relative flex items-center">
                  <FaCircleUser className="absolute h-[70%] border rounded-full border-black w-fit right-1/2 translate-x-3" />
                  <FaCircleUser className="absolute h-[70%] border rounded-full border-black w-fit right-1/2 translate-x-7" />
                  <FaCircleUser className="absolute h-[70%] border rounded-full border-black w-fit right-1/2 translate-x-11" />
                </div>
              </div>
              <div className="absolute p-2.5 bottom-2 right-15 w-60 rounded-2xl h-12 bg-white text-black grid grid-cols-[1.5fr_1fr]">
                <div>
                  <p className="text-xs">Onboarding Session</p>
                  <p className="text-[10px] text-gray">
                    Introduction to new heirs
                  </p>
                </div>

                <div className="relative flex items-center justify-center">
                  <FaCircleUser className="absolute h-[70%] border rounded-full border-white w-fit right-1/2 translate-x-7" />
                  <FaCircleUser className="absolute h-[70%] border rounded-full border-white w-fit right-1/2 translate-x-11" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
