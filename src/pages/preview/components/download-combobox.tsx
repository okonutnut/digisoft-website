import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DownloadVersionProps {
  options?: { value: string; label: string }[];
  className?: string;
}

export function DownloadVersion({ options, className }: DownloadVersionProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(className, "w-[300px] justify-between text-wrap")}
          >
            {value
              ? options?.find((item) => item.value === value)?.label
              : "Select version..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn(className, "w-[300px] p-0")}>
          <Command>
            <CommandInput placeholder="Search versions..." className="h-9" />
            <CommandList>
              <CommandEmpty>No versions found.</CommandEmpty>
              <CommandGroup>
                {options?.map((item, index: number) => (
                  <CommandItem
                    key={index}
                    value={item.value}
                    onSelect={(currentValue: string) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {item.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === item.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {value && (
        <Link to={`${value}`} target="_blank">
          <Button className="w-[160px] xs:w-full sm:w-full dark:text-white">
            Download
          </Button>
        </Link>
      )}
    </>
  );
}
