import { forwardRef } from "react";
import { CgArrowTopRight } from "react-icons/cg";

const RoundButton = forwardRef<
  HTMLButtonElement,
  {
    children?: React.ReactNode;
    backgroundColor?: string;
    textColor?: string;
  } & React.HTMLAttributes<HTMLButtonElement>
>(
  (
    {
      children = <CgArrowTopRight />,
      backgroundColor = "white",
      textColor,
      ...props
    },
    ref
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={`p-[10px] rounded-full w-9 h-9 bg-${backgroundColor} transition-colors duration-300 text-${
          backgroundColor?.toLocaleLowerCase() === "white"
            ? "black"
            : backgroundColor?.toLocaleLowerCase() === "black"
            ? "white"
            : textColor
        }`}
      >
        {children}
      </button>
    );
  }
);
RoundButton.displayName = "RoundButton";
export default RoundButton;
