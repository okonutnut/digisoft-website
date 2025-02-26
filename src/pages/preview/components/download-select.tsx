import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

interface DownloadSelectProps {
  className?: string;
  options?: { value: string; label: string }[];
}

export default function DownloadSelect({
  className,
  options,
}: DownloadSelectProps) {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <>
      <Select onValueChange={setSelected}>
        <SelectTrigger className={cn("w-[180px]", className)}>
          <SelectValue placeholder="Select Version" />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selected && (
        <Link to={`/${selected}`} target="_blank">
          <Button>Download</Button>
        </Link>
      )}
    </>
  );
}
