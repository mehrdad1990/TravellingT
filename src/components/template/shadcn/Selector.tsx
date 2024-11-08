"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useSelector,useDispatch } from "react-redux"
import {Destination} from '@/redux/feature/Api.Slice'
import countries from "@/Data/AllCountry.json"
import { ImLocation } from 'react-icons/im';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CommandList } from "cmdk"

export function Selector() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const formData = useSelector((state:any)=>state.formData.destination)
  const dispatch = useDispatch()

    if(value.length>0){
      const countryData = countries;
      const selectedCountry = countryData.filter((item)=> item.countryCode==value)
      const LowerCaseCountry = selectedCountry[0].countryName.toLowerCase()
      dispatch(Destination(LowerCaseCountry))
    }
 

  const isCountriesArray = Array.isArray(countries)
  


  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="travelTrills"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
<ImLocation size={25}/>
          {value
            ? countries.find((country) => country.countryCode === value)?.countryName
            : "Select Country"}
          <CaretSortIcon className="ml-2 h-6 w-6  opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] h-[40vh] p-0">
        <Command>
          <CommandInput placeholder="Search country..." className="h-9" />
          <CommandEmpty>No country found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
            {isCountriesArray ? (
              countries.map((country) => (
                <CommandItem
                  key={country.id}
                  value={country.countryCode}
                  onSelect={(currentValue:any) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {country.countryName}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === country.countryCode ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))
            ) : (
              <CommandEmpty>No countries available.</CommandEmpty>
            )}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
