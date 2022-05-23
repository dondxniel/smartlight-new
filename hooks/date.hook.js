export default function useUTCDate() {
  const DATE = new Date();
  let _day = DATE.getUTCDay();
  let _date = DATE.getUTCDate();
  let _month = DATE.getUTCMonth();
  let _year = DATE.getUTCFullYear();

  let day;
  let month;

  switch (_day) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;

    default:
      day = "Sunday";
      break;
  }
  switch (_month) {
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;

    default:
      month = "January";
      break;
  }
  const convertToString = _date.toString();
  const formatedDate =
    convertToString.length === 2
      ? Number(convertToString)
      : Number("0".concat(convertToString));
  return { day, month, date: formatedDate, year: _year };
}
