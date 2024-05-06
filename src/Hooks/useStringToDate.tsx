import React from "react";

const useStringToDate = (date: string) => {
  const [newDate, setNewDate] = React.useState<Date | null>(null);

  React.useEffect(() => {
    if (date) {
      const timestamp = date.split(" ");
      const dateString = timestamp[0].split("-");
      const dateTime = timestamp[1].split(":");

      const dateConverted = new Date(+dateString[0], +dateString[1] - 1, +dateString[2], +dateTime[0], +dateTime[1], +dateTime[2]);
      
      setNewDate(dateConverted)
    }
  }, [date]);

  return newDate;
};

export default useStringToDate;
