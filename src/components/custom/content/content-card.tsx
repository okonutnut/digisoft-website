import { cn } from "@/lib/utils";

interface ContentCardProps {
  title?: string;
  id?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function ContentCard({
  title,
  id,
  children,
  className,
}: ContentCardProps) {
  return (
    <div id={id} className={cn(className, "w-full")}>
      {title && <h2 className="text-lg font-bold text-primary">{title}</h2>}
      {children}
    </div>
  );
}
