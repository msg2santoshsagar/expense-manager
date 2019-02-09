export function todayDateForDatePicker() {
  let date = new Date();

  let day = date.getDate();
  let monthIndex = date.getMonth() + 1;
  let year = date.getFullYear();

  if (monthIndex < 10) {
    monthIndex = "0" + monthIndex;
  }

  if (day < 10) {
    day = "0" + day;
  }

  return year + "-" + monthIndex + "-" + day;
}

export function formatDateToDisplay(dt) {
  let date = new Date(dt);

  let day = date.getDate();
  let monthIndex = date.getMonth() + 1;
  let year = date.getFullYear();

  if (monthIndex < 9) {
    monthIndex = "0" + monthIndex;
  }

  if (day < 9) {
    day = "0" + day;
  }

  return day + "/" + monthIndex + "/" + year;
}
