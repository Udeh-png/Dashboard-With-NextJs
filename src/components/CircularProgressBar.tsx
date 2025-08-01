"use client";

import { useEffect, useRef, useState } from "react";

export const CircularProgressBar = ({
  progress = 0,
  display = progress.toString(),
  max = 100,
  title,
}: {
  progress?: number;
  max?: number;
  title?: string;
  display: string;
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (svgRef.current) {
        setSvgSize({
          width: svgRef.current.width.baseVal.value,
          height: svgRef.current.height.baseVal.value,
        });
      }
    });
    resizeObserver.observe(containerRef.current!);
  }, []);

  return (
    <div className="relative h-full" ref={containerRef}>
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width={"100%"}
        height={"100%"}
      >
        {svgRef.current && progress > 0 && max > 0 && (
          <g
            transform={`translate(${svgSize.width / 2}, ${svgSize.height / 2})`}
          >
            {Array.from({ length: 40 }).map((_, index) => {
              return (
                <line
                  key={index}
                  x1="60"
                  y1="0"
                  x2="67"
                  y2="0"
                  stroke="#ccc"
                  strokeWidth={2}
                  transform={`rotate(${index * 9})`}
                />
              );
            })}
          </g>
        )}

        {svgRef.current && progress > 0 && max > 0 && (
          <circle
            cx="50%"
            cy="50%"
            r="63"
            stroke="orange"
            strokeWidth={"11"}
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={"393"}
            strokeDashoffset={progress > max ? 0 : 393 - (progress / max) * 393}
            className="-rotate-[90deg] origin-center"
          />
        )}

        <circle
          cx="50%"
          cy="50%"
          r="55"
          stroke="#f3f4f6"
          fill="rgba(255,255,255,0.4)"
          className="-rotate-[95deg] origin-center"
        />
        <text x={"50%"} y={"52%"} textAnchor="middle" className="text-lg">
          {progress < 0 ? "🖕" : display}
        </text>

        {title && (
          <text
            x={"50%"}
            y={"65%"}
            textAnchor="middle"
            fill="gray"
            className="text-xs font-medium"
          >
            {title}
          </text>
        )}
      </svg>
    </div>
  );
};
