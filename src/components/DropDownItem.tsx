import { FaAngleDown } from "react-icons/fa6";
import DottedLine from "@/components/DottedLine";
import Image from "next/image";

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
        className={`h-0 w-full transition-[height] duration-300 ${
          shouldOpen ? "h-15" : ""
        }`}
      >
        <div
          className={`grid grid-cols-[1fr_2.5fr] h-full transition-opacity duration-300 opacity-0 ${
            shouldOpen ? "opacity-100" : ""
          }`}
        >
          <div className="relative">
            <Image src={"/laptop-picture.png"} fill alt="Laptop Pic" />
          </div>
          <div className="flex flex-col px-2 justify-center">
            <p className="text-sm text-black">MacBook Air</p>
            <p className="text-xs text-gray">Version M1</p>
          </div>
        </div>
      </div>
      <DottedLine
        orientation="horizontal"
        className="absolute bottom-0 right-2 left-3"
        color="gray"
      />
    </div>
  );
};
