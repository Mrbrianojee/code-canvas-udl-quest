
import { cn } from "@/lib/utils";

type DifficultyLevel = "easy" | "medium" | "hard";

interface DifficultyBadgeProps {
  level: DifficultyLevel;
  className?: string;
}

const DifficultyBadge = ({ level, className }: DifficultyBadgeProps) => {
  const colors = {
    easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        colors[level],
        className
      )}
    >
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  );
};

export default DifficultyBadge;
