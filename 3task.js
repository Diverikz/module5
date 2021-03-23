// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let str = "Hello";
function reverseString(reverse) {
  return reverse === ""
    ? ""
    : reverseString(reverse.substr(1)) + reverse.charAt(0);
}

console.log(reverseString(str));
