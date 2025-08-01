"use client";

import { TaskInterface } from "@/@types/taskData";
import { Card } from "@/components/Card";
import { ListItem } from "@/components/ListItem";
import { useState } from "react";
import { CiMonitor } from "react-icons/ci";

export default function OnBoardingPage() {
  const [items, setItems] = useState<TaskInterface[]>([
    {
      id: "1",
      task: "Interview",
      DAT: "Sep 23, 12:01",
      icon: <CiMonitor />,
      completed: true,
    },
    {
      id: "2",
      task: "Meeting",
      DAT: "Sep 23, 12:01",
      icon: <CiMonitor />,
      completed: true,
    },
    {
      id: "3",
      task: "Project update",
      DAT: "Sep 23, 12:01",
      icon: <CiMonitor />,
      completed: true,
    },
    {
      id: "4",
      task: "Discuss Q3 Goals",
      DAT: "Sep 23, 12:01",
      icon: <CiMonitor />,
      completed: false,
    },
    {
      id: "5",
      task: "HR Policy Review",
      DAT: "Sep 23, 12:01",
      icon: <CiMonitor />,
      completed: false,
    },
  ]);

  const completedTasks = items.filter((item) => item.completed).length;

  function handleCompleted(id: string) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }
  return (
    <Card>
      <div className="h-full flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <p className="text-lg">Onboarding</p>
          <span className="text-3xl">18%</span>
        </div>

        <div className="flex flex-col justify-between h-16 mb-3">
          <div className="grid grid-cols-[3fr_2fr_1fr] text-xs">
            <p>30%</p>
            <p className="ml-2">25%</p>
            <p className="ml-2">0%</p>
          </div>

          <div className="grid grid-cols-[3fr_2fr_1fr] h-10">
            <div className="bg-orange-400 rounded-xl"></div>
            <div className="relative bg-black rounded-xl after:content-[''] after:absolute after:bottom-1/2 after:left-0 after:h-full after:border after:border-black"></div>
            <div className="relative bg-gray rounded-xl after:content-[''] after:absolute after:bottom-1/2 after:left-0 after:h-full after:border after:border-gray"></div>
          </div>
        </div>

        <div className="h-4/5 relative flex justify-center">
          <div className="bg-white h-[90%] rounded-[29px] left-2 right-2 absolute top-0"></div>

          <div className="bg-gray h-[90%] rounded-[29px] -left-0 -right-0 absolute top-5"></div>

          <div className="bg-black p-5 h-[93%] rounded-[29px] -left-2 -right-2 absolute top-10 text-white">
            <div className="flex justify-between items-center mb-4">
              <div>Onboarding Task</div>
              <div className="text-3xl">
                {completedTasks}/{items.length}
              </div>
            </div>

            <ul className="">
              {items.map(({ id, task, DAT, icon, completed }, index) => (
                <li
                  key={index}
                  onClick={() => {
                    handleCompleted(id);
                  }}
                >
                  <ListItem
                    task={task}
                    DAT={DAT}
                    icon={icon}
                    completed={completed}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}
