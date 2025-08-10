"use client";

import { Card } from "@/components/Card";
import { use, useCallback, useEffect, useRef, useState } from "react";
import { CircularProgressBar } from "../../../components/CircularProgressBar";
import { CgAlarm } from "react-icons/cg";
import { PiPauseThin, PiPlayThin } from "react-icons/pi";
import RoundButton from "@/components/RoundButton";
import Link from "next/link";
import millisToSec from "@/utils/MillisToSec";
import {
  clearLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "@/utils/LocalStorageStuff";
import { getCookie, removeCookie } from "@/utils/CookiesStuff";

export default function TimerTrackerPage({
  searchParams,
}: {
  searchParams: Promise<{ ts: string }>;
}) {
  const myCookies = getCookie("name");
  const name = myCookies && myCookies[0];
  const value = myCookies && myCookies[1];

  if (value === "clear") {
    clearLocalStorage();
    removeCookie(name!);
  }

  const params = use(searchParams);
  const [totalSeconds] = useState(
    Number(getFromLocalStorage("totalSeconds")) || Number(params.ts) || 0
  );
  const [totalSecondsLeft, setSecondsLeft] = useState(totalSeconds);
  const seconds = totalSecondsLeft % 60;
  const minutes = Math.floor(totalSecondsLeft / 60) % 60;
  const hours = Math.floor(totalSecondsLeft / 3600);

  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const secsToString = seconds.toString().padStart(2, "0");
  const minsToString = minutes.toString().padStart(2, "0");
  const hrsToString = hours.toString().padStart(2, "0");
  const interval = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  let pauseTime = useRef<number>(0);
  const resumeTime = useRef<number>(0);
  const startTime = useRef<number | null>(null);
  const totalPauseTime = useRef<number>(
    Number(getFromLocalStorage("totalPauseTime") || 0)
  );

  function startTimer() {
    if (!startTime.current) {
      startTime.current = Number(getFromLocalStorage("now")) || Date.now();
    }
    saveToLocalStorage("now", String(startTime.current));
    saveToLocalStorage("totalSeconds", String(totalSeconds));
    interval.current = setInterval(() => {
      const now = Date.now();
      const elapsedTime = millisToSec(now - startTime.current!);

      setSecondsLeft((totalSec) => {
        return totalSec > 0
          ? totalPauseTime.current + (totalSeconds - elapsedTime)
          : 0;
      });

      setProgress((progress) => {
        return progress >= totalSeconds
          ? totalSeconds
          : elapsedTime - totalPauseTime.current;
      });
    }, 1);
  }

  function handlePause() {
    if (!isPaused) {
      pauseTime.current = Date.now();
      clearInterval(interval.current!);
      setIsPaused(true);
    }
  }

  function handleResume() {
    if (isPaused) {
      resumeTime.current = Date.now();
      totalPauseTime.current += millisToSec(
        resumeTime.current - pauseTime.current
      );
      saveToLocalStorage("totalPauseTime", totalPauseTime.current.toString());
      startTimer();
      setIsPaused(false);
    }
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current!);
      interval.current = null;
    };
  }, []);

  useEffect(() => {
    const num = totalSecondsLeft;
    if (num === 0) {
      clearInterval(interval.current!);
      interval.current = null;
      removeFromLocalStorage("now");
      removeFromLocalStorage("totalPauseTime");
      removeFromLocalStorage("totalSeconds");
    }
  }, [totalSecondsLeft]);
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
              onClick={handleResume}
              backgroundColor={isPaused ? "white" : "black"}
              ref={buttonRef}
            >
              <PiPlayThin />
            </RoundButton>

            <RoundButton
              onClick={handlePause}
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
