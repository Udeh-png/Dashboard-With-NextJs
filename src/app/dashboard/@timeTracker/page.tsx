"use client";

import { Card } from "@/components/Card";
import { use, useCallback, useEffect, useRef, useState } from "react";
import { CircularProgressBar } from "../../../components/CircularProgressBar";
import { CgAlarm } from "react-icons/cg";
import { PiPauseThin, PiPlayThin } from "react-icons/pi";
import RoundButton from "@/components/RoundButton";
import Link from "next/link";

export default function TimerTrackerPage({
  searchParams,
}: {
  searchParams: Promise<{ ts: string }>;
}) {
  const params = use(searchParams);
  const totalSeconds = Number(params.ts) || 0;

  const [totalSecondsState, setTotalSeconds] = useState(totalSeconds);
  const seconds = totalSecondsState % 60;
  const minutes = Math.floor(totalSecondsState / 60) % 60;
  const hours = Math.floor(totalSecondsState / 3600);

  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const secsToString = seconds.toString().padStart(2, "0");
  const minsToString = minutes.toString().padStart(2, "0");
  const hrsToString = hours.toString().padStart(2, "0");
  let interval = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  let num = 0;

  function startTimer() {
    interval.current = setInterval(() => {
      setTotalSeconds((totalSec) => {
        return totalSec > 0 ? (totalSec -= 1) : 0;
      });

      setProgress((progress) => {
        if (progress >= totalSeconds) {
          return totalSeconds;
        }
        return (progress += 1);
      });
    }, 1000);
  }

  function handlePause() {
    if (!isPaused) {
      clearInterval(interval.current!);
      setIsPaused(true);
    }
  }

  function handleResume() {
    if (isPaused) {
      startTimer();
      setIsPaused(false);
    }
  }
  const pauseTimerCallback = useCallback(handlePause, [isPaused]);
  const resumeTimerCallback = useCallback(handleResume, [isPaused]);

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current!);
      interval.current = null;
    };
  }, []);

  useEffect(() => {
    num = totalSecondsState;
    if (num === 0) {
      clearInterval(interval.current!);
      interval.current = null;
    }
  }, [totalSecondsState]);
  return (
    <Card>
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-2 justify-between h-10">
          <p className="text-lg">Timer tracker</p>
          <RoundButton></RoundButton>
        </div>

        <div className="relative h-full">
          <CircularProgressBar
            progress={progress}
            max={totalSeconds}
            title="Work Time Left"
            display={`${hrsToString} : ${minsToString} : ${secsToString}`}
          />
        </div>

        <div className="grid h-full items-center grid-cols-[2fr_1fr] text-black">
          <div className="flex gap-1">
            <RoundButton
              onClick={resumeTimerCallback}
              backgroundColor={isPaused ? "white" : "black"}
              ref={buttonRef}
            >
              <PiPlayThin />
            </RoundButton>

            <RoundButton
              onClick={pauseTimerCallback}
              backgroundColor={!isPaused ? "white" : "black"}
            >
              <PiPauseThin />
            </RoundButton>
          </div>
          <div className="flex justify-end">
            <RoundButton backgroundColor={"black"}>
              <Link href={"/dashboard/setTimer"}>
                <CgAlarm />
              </Link>
            </RoundButton>
          </div>
        </div>
      </div>
    </Card>
  );
}
