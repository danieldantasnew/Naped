const StringToDate = (date: string) => {
  if (date) {
    const timestamp = date.split(" ");
    const dateString = timestamp[0].split("-");
    const dateTime = timestamp[1].split(":");

    const dateConverted = new Date(+dateString[0], +dateString[1] - 1, +dateString[2], +dateTime[0], +dateTime[1], +dateTime[2]);
    return dateConverted;
  }

  return null;
};

export default StringToDate;
