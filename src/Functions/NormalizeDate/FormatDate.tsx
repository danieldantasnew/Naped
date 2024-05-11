const FormatDate = (date: Date, withHour = false): string => {
  const day = `${date.getDate()}`.padStart(2, '0');
  const month = `${date.getMonth()}`.padStart(2, '0');
  const year = date.getFullYear();

  if(!withHour) return `${day}/${month}/${year}`;
  else {
    const hours = `${date.getHours()}`.padStart(2, '0');
    const minutes = `${date.getMinutes()}`.padStart(2, '0');
    const seconds = `${date.getSeconds()}`.padStart(2, '0');

    return `${day}/${month}/${year} às ${hours}:${minutes}:${seconds}`;
  }
  
}

export default FormatDate;