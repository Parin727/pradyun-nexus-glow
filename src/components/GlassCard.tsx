import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "backdrop-blur-xl bg-glass border border-glass-border rounded-2xl shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
};
