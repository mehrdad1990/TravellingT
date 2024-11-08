import React, { useEffect, useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, differenceInDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { useSelector, useDispatch } from "react-redux";
import { DATEFROM, DATETO, Days } from "@/redux/feature/Api.Slice";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const initialFromDate = new Date();
  const initialToDate = addDays(new Date(), 10);

  const [date, setDate] = useState<DateRange | undefined>({
    from: initialFromDate,
    to: initialToDate,
  });
  const dispatch = useDispatch();

  const handleDateSelect = (selectedRange: any) => {
    // Update state outside of callback function
    setDate({
      from: selectedRange.from,
      to: selectedRange.to,
    });

    // Dispatch actions after state update
    const fromDate = selectedRange.from.toISOString();
    const toDate = selectedRange.to.toISOString();
    dispatch(DATEFROM(fromDate));
    dispatch(DATETO(toDate));

    // if (date?.from && date?.to) {
    //   const daysDifference = differenceInDays(date.to, date.from);
    //   dispatch(Days(daysDifference));
    // }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"travelTrills"}
            className={cn(
              "w-[300px]  justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-6 w-6" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
