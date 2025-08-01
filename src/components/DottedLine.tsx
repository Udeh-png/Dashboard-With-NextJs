export default function DottedLine({
  orientation,
  className,
  color,
}: {
  orientation: "vertical" | "horizontal";
  className?: string;
  color: string;
}) {
  return (
    <div className={`${className} h-fit w-fit`}>
      <svg
        width={orientation === "horizontal" ? "100%" : "5"}
        height={orientation === "vertical" ? "100%" : "5"}
      >
        <line
          x1={orientation === "vertical" ? "50%" : "0"}
          x2={orientation === "vertical" ? "50%" : "100%"}
          y1={orientation === "vertical" ? "0" : "50%"}
          y2={orientation === "vertical" ? "100%" : "50%"}
          stroke={`${color}`}
          strokeWidth="2"
          strokeDasharray="2" // dash-gap pattern
        />
      </svg>
    </div>
  );
}
