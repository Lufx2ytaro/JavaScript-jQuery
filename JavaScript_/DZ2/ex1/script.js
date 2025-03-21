let car = {
  manufacturer: "Toyota",  // Производитель
  model: "Corolla",        // Модель
  year: 2020,              // Год выпуска
  averageSpeed: 100        // Средняя скорость в км/ч
};


function displayCarInfo(car) {
  console.log(`Производитель: ${car.manufacturer}`);
  console.log(`Модель: ${car.model}`);
  console.log(`Год выпуска: ${car.year}`);
  console.log(`Средняя скорость: ${car.averageSpeed} км/ч`);
}

// Вызов функции для вывода информации
displayCarInfo(car);


function calculateTravelTime(car, distance) {
  let time = distance / car.averageSpeed;  // Время в часах без учета перерывов
  let breaks = Math.floor(time / 4);       // Количество перерывов
  if (time % 4 === 0) breaks--;            // Если время кратно 4, уменьшаем количество перерывов
  let totalTime = time + breaks;           // Общее время с учетом перерывов
  return totalTime;
}

// Пример использования функции
let distance = 500;  // Расстояние в км
let travelTime = calculateTravelTime(car, distance);
console.log(`Время на преодоление ${distance} км: ${travelTime.toFixed(2)} часов`);