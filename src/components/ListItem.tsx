"use client";

import { BsCheck } from "react-icons/bs";
import RoundButton from "./RoundButton";

export const ListItem = ({
  task,
  DAT,
  icon,
  completed,
}: {
  task: string;
  DAT: string;
  icon: React.ReactNode;
  completed: boolean;
}) => {
  return (
    <div className="grid grid-cols-[1fr_5fr_1fr] mb-7 space-x-2 items-center">
      <div className="">
        <RoundButton backgroundColor={`${completed ? "gray" : "white"}`}>
          {icon}
        </RoundButton>
      </div>
      <div className="">
        <p
          className={`${
            completed ? "after:w-full after:left-0 text-gray" : ""
          } overflow-clip relative w-fit text-xs after:content-[""] after:absolute after:top-1/2 after:-left-1 after:h-0 after:border after:w-0 after:transition-[width]
      after:duration-300`}
        >
          {task}
        </p>
        <p className="text-[10px] text-gray">{DAT}</p>
      </div>
      <div className="flex rounded-full overflow-clip bg-gray w-4 h-4 items-center justify-center">
        {completed && (
          <BsCheck className="text-center bg-amber-500 text-black" />
        )}
      </div>
    </div>
  );
};
