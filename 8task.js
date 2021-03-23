// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

let cars = new Map([
  ["Nissan", "Skyline"],
  ["Mitsubishi", "Evolution"],
  ["Honda", "Prelude"],
]);
for (let carName of cars.keys()) {
  console.log("Марка " + carName);
  console.log("Модель " + cars.get(carName));
}
