"use client";

import { Card } from "@/components/Card";
import { DropdownItem } from "@/components/DropDownItem";
import { useEffect, useRef, useState } from "react";

export default function PerksPage() {
  const [isClickedId, setIsClickedId] = useState<number | null>();
  const dropDownRef = useRef<HTMLDivElement>(null);
  const dropDownObjs = [
    { title: "Pension Contribution", id: 1 },
    { title: "Devices", id: 2 },
    { title: "Compensation Summary", id: 3 },
    { title: "Employee Benefits", id: 4 },
  ];
  function handleClick(id: number) {
    setIsClickedId((prev) => {
      return prev === id ? null : id;
    });
  }

  useEffect(() => {
    const dropDown = dropDownRef.current;

    const array = [...dropDown?.querySelectorAll("*")!];

    document.addEventListener("click", (e) => {
      if (!array?.includes(e.target as HTMLDivElement)) {
        setIsClickedId(null);
      }
    });
  }, []);
  return (
    <Card>
      <div
        className="flex flex-col h-full text-sm font-semibold"
        ref={dropDownRef}
      >
        {dropDownObjs.map(({ title, id }, i) => (
          <DropdownItem
            id={id}
            title={title}
            shouldOpen={isClickedId === id}
            onClick={(anId) => {
              handleClick(anId);
            }}
            key={i}
          />
        ))}
      </div>
    </Card>
  );
}
