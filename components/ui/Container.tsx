import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full max-w-[1280px] mx-auto px-[clamp(16px,4vw,40px)]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
