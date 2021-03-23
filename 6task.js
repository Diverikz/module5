// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let mass = [1, 1, 1, 1, 1];
let boolean = true;
for (let t = 1; t < mass.length; t++) {
  if (mass[t] !== mass[0]) {
    boolean = false;
    console.log(boolean);
    break;
  }
}
if (boolean) {
  console.log(boolean);
}
