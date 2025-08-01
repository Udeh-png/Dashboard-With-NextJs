"use client";

import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import DottedLine from "@/components/DottedLine";

export const DropdownItem = ({
  title,
  shouldOpen,
  onClick,
  id,
}: {
  id: number;
  title: string;
  shouldOpen: boolean;
  onClick: (id: number) => void;
}) => {
  return (
    <div
      className="relative cursor-pointer p-[13px]"
      onClick={() => {
        onClick(id);
      }}
    >
      <div className="flex items-center justify-between">
        <p>{title}</p>
        <FaAngleDown
          className={`${
            shouldOpen ? "rotate-180" : ""
          } transition-transform duration-300`}
        />
      </div>
      <div
        className={`h-0 w-full bg-red-500  transition-[height] duration-300 ${
          shouldOpen ? "h-15" : ""
        }`}
      ></div>
      <DottedLine
        orientation="horizontal"
        className="absolute bottom-0 right-2 left-3"
        color="gray"
      />
    </div>
  );
};
