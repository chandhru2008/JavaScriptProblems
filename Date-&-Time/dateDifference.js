function getDateDifference(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffInMs = Math.abs(d2 - d1);
  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffInMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffInMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffInMs / 1000) % 60);
  return { days, hours, minutes, seconds };
}


const date1 = "2025-07-01T10:00:00";
const date2 = "2025-07-11T14:45:30";

const difference = getDateDifference(date1, date2);
console.log(difference);

