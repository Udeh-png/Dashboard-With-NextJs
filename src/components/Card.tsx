export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`overflow-clip rounded-4xl transition-[padding] p-5 backdrop-blur-[2px] bg-trans-white ${className}`}
    >
      {children}
    </div>
  );
};
