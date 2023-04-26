export function changeDateFormat(apiDate) {
   const date = new Date(apiDate);
   const newDate = date.toUTCString();
   return newDate;
}
