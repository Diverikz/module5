// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let mass = ["love", 4, 5, null, "js", 6, true, 0];
let odd = 0;
let even = 0;
for (let t = 0; t < mass.length; t++) {
  if (typeof mass[t] == "number") {
    if (mass[t] == 0) {
      console.log("mass[" + t + "] =0");
    } else if (mass[t] % 2 == 1) {
      even += 1;
    } else if (mass[t] % 2 == 0) {
      odd += 1;
    }
  }
}

console.log("even numbers " + even);
console.log("odd numbers " + odd);
