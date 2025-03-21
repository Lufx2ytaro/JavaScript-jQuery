
let time = {
  hours: 20,    
  minutes: 30,   
  seconds: 45   
};


function displayTime(time) {
  console.log(`Время: ${time.hours}:${time.minutes}:${time.seconds}`);
}


displayTime(time);


function addSeconds(time, secondsToAdd) {
  time.seconds += secondsToAdd;


  if (time.seconds >= 60) {
      time.minutes += Math.floor(time.seconds / 60);
      time.seconds = time.seconds % 60;
  }


  if (time.minutes >= 60) {
      time.hours += Math.floor(time.minutes / 60);
      time.minutes = time.minutes % 60;
  }


  if (time.hours >= 24) {
      time.hours = time.hours % 24;
  }
}


addSeconds(time, 30);  
displayTime(time);     


function addMinutes(time, minutesToAdd) {
  time.minutes += minutesToAdd;

  
  if (time.minutes >= 60) {
      time.hours += Math.floor(time.minutes / 60);
      time.minutes = time.minutes % 60;
  }

 
  if (time.hours >= 24) {
      time.hours = time.hours % 24;
  }
}


addMinutes(time, 45);  
displayTime(time);     


function addHours(time, hoursToAdd) {
  time.hours += hoursToAdd;


  if (time.hours >= 24) {
      time.hours = time.hours % 24;
  }
}


addHours(time, 5);  
displayTime(time);  




console.log("Начальное время:");
displayTime(time);


addSeconds(time, 30);
console.log("\nПосле добавления 30 секунд:");
displayTime(time);


addMinutes(time, 45);
console.log("\nПосле добавления 45 минут:");
displayTime(time);


addHours(time, 5);
console.log("\nПосле добавления 5 часов:");
displayTime(time);