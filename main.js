

const now = new Date();
const weekDay = new Date().toLocaleString(
  'default', {weekday: 'long'}
);
console.log(weekDay);
const withPmAm = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
  
const weekDayName = document.getElementById('calendar')
weekDayName.innerHTML = weekDay + " " + withPmAm



