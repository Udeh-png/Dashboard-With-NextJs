export const LineOfGraph = ({
  bottom = 135,
  top,
  color,
}: {
  bottom?: number;
  top: number;
  color: string;
}) => {
  return (
    <div className="w-fit h-full">
      <svg className="" width={"10"} height={"155"}>
        <line
          stroke={color}
          strokeWidth={7}
          strokeDasharray={155}
          strokeDashoffset={155}
          x1={"50%"}
          x2={"50%"}
          y1={bottom}
          strokeLinecap="round"
          y2={top}
        ></line>
        <circle
          r={3}
          cy={"150"}
          cx={"50%"}
          stroke={color}
          fill={color}
          strokeWidth={2}
        />
      </svg>
    </div>
  );
};
