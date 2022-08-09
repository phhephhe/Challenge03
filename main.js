

const now = new Date();
const weekDay = new Date().toLocaleString(
  'default', {weekday: 'long'}
);

const withPmAm = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
  
const weekDayName = document.getElementById('calendar')
weekDayName.style.color = 'red'
weekDayName.style.textShadow = '5px 5px 20px white'
weekDayName.innerHTML = weekDay + " " + withPmAm




