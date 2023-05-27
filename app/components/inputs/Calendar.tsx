"use client";

import { useEffect, useState } from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface DatePickerProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  disabledDates,
}) => {
  console.log(new Date());
  const [defaultDate, setDefaultDate] = useState(new Date());
  const disabledDatess = [
    "2023-05-20",
    "2023-05-21",
    "2023-05-23",
    "2023-05-24",
    "2023-05-26",
  ]; // Example disabled dates array

  // useEffect(() => {
  //   const firstNonDisabledDate = findFirstNonDisabledDate();
  //   setDefaultDate(firstNonDisabledDate);
  // }, []);

  // const findFirstNonDisabledDate = () => {
  //   let currentDate = new Date().toISOString().split("T")[0]; // Get current date in the format 'YYYY-MM-DD'
  //   if (!disabledDates?.length) {
  //     return new Date(currentDate);
  //   }
  const currentDate = new Date().toISOString().split("T")[0]; // Get current date in the format 'YYYY-MM-DD'
  let nextDate = new Date(currentDate);
  useEffect(() => {
    let i;
    for (i = 0; i < 20; i++) {
      if (isDateDisabled(nextDate)) {
        console.log("disabled");
        nextDate.setDate(nextDate.getDate() + 1);
        console.log(nextDate);
      } else {
        console.log("not disabled", nextDate);
        return;
      }
    }
    // while (isDateDisabled(nextDate)) {
    //   nextDate.setDate(nextDate.getDate() + 1); // Add a day to the current date
    // }
    console.log(nextDate);
  }, []);

  const isDateDisabled = (date: Date) => {
    const dateString = date.toISOString().split("T")[0]; // Convert date to 'YYYY-MM-DD' format
    let dateDisabled = disabledDates?.map(
      (data) => data.toISOString().split("T")[0]
    );
    console.log(dateDisabled, "disabled", dateString, "string");
    console.log();

    return dateDisabled?.includes(dateString);
  };

  // for (let date of disabledDates) {
  //   if (date.toISOString() > currentDate) {
  //     return new Date(date);
  //   }
  // }
  // return null; // Return null if no non-disabled dates found
  // };
  // console.log(defaultDate ? new Date(defaultDate) : null);
  // console.log(disabledDates?.length && disabledDates[0].toISOString());
  // console.log(findFirstNonDisabledDate());

  return (
    <DateRange
      rangeColors={["#262626"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
  );
};

export default DatePicker;
