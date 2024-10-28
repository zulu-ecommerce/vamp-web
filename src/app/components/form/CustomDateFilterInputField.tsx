'use client'
import { CalendarTick } from 'iconsax-react'
import DatePicker from 'react-datepicker'
import React from 'react'
import clsx from 'clsx'

import { Label } from '../elements/Label'

type CustomDateFilterInputFieldProps = {
  name: string
  label?: string
  className?: string
  placeholder?: string
  hasError?: boolean
  isRequired?: boolean
  selectsRange?: boolean
  startDate: Date | null
  endDate: Date | null
  onChange: (dates: [Date | null, Date | null] | Date | null) => void
}

export const CustomDateFilterInputField: React.FC<
  CustomDateFilterInputFieldProps
> = ({
  name,
  label,
  hasError,
  className,
  placeholder = 'Select date',
  isRequired,
  startDate,
  endDate,
  onChange,
}) => {
  return (
    <>
      <div className="relative border rounded-lg w-full h-full flex items-center">
        <div className="flex items-start flex-col pl-12">
          {!!label && (
            <Label
              htmlFor={name}
              isRequired={isRequired}
              className="pt-1 mb-0 w-full pb-[6px]"
            >
              {label}
            </Label>
          )}
          <DatePicker
            className={clsx(
              'min-w-[250px] rounded-[4px] outline-none bg-transparent placeholder:text-sm text-sm placeholder:text-black text-primary-500 focus-within:border-primary-200 transition-colors duration-300 disabled:bg-gray-100',
              hasError && 'border-red-500',
              className
            )}
            placeholderText={placeholder}
            selected={startDate}
            onChange={onChange}
            dateFormat="dd MMM yyyy"
            showMonthDropdown
            autoComplete="off"
            showYearDropdown
            customInput={<input inputMode='none' />} //for the keyboard on mobile devices
            selectsRange
            startDate={startDate ?? undefined}
            endDate={endDate ?? undefined}
            onFocus={(e) => e.target.blur()} //for the keyboard on mobile devices
            withPortal
            id={name}
            disabledKeyboardNavigation
            dropdownMode='select'
          />
        </div>
        <label
          htmlFor={name}
          className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-cursor"
        >
          <CalendarTick size="24" color="#000000" />
        </label>
      </div>
    </>
  )
}
