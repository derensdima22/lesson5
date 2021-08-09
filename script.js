//1.Напишите функцию max, которая сравнивает два числа и возвращает большее:
function max(a, b) {
  return a < b ? b : a;
}
console.log(max(-1, 0));

//2.Напишите функцию-аналог Math.min(). Функция принимает любое количество
// чисел и возвращает меньшее из них:
function min(...arg) {
  return arg.reduce((a, b) => {
    return a < b ? a : (a = b);
  }, arg[0]);
}

//3.Изучите перебирающие методы массивов: forEach, filter, map.
// Создайте массив объектов users (~10 объектов), каждый объект
//имеет поля firstname, lastname, age с разными значениями.
// Используя встроенные функции массивов:
//  •	Отфильтруйте пользователей младше 18 лет
//  •	Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
//  •	Сформируйте новый массив, который содержит только полное имя пользователей

//const users = [    ---- способ 1
//   { firstName: "Иван", lastName: "Пупкин", age: 45 },
//   { firstName: "Вася", lastName: "Печкин", age: 20 },
//   { firstName: "Сергей", lastName: "Безруков", age: 33 },
//   { firstName: "Юрий", lastName: "Измайлови", age: 18 },
//   { firstName: "Андрей", lastName: "Гербин", age: 17 },
//   { firstName: "Анатолий", lastName: "Кравченко", age: 25 },
//   { firstName: "Анастасия", lastName: "Вечная", age: 99 },
//   { firstName: "Ираиса", lastName: "Козявкина", age: 39 },
//   { firstName: "Грегорий", lastName: "Козявкин", age: 18 },
//   { firstName: "Мария", lastName: "Шевченко", age: 28 },
// ];

// ---- способ 2
const firstName = [
  "Иван",
  "Вася",
  "Сергей",
  "Юрий",
  "Андрей",
  "Анатолий",
  "Анастасия",
  "Ираиса",
  "Грегорий",
  "Мария",
];
const lastName = [
  "Пупкин",
  "Печкин",
  "Безруков",
  "Измайлови",
  "Гербин",
  "Кравченко",
  "Вечная",
  "Козявкина",
  "Козявкин",
  "Шевченко",
];
const age = [45, 20, 33, 18, 18, 25, 99, 39, 18, 28];
const users = [];
for (let i = 0; i < firstName.length; i++) {
  users[i] = { firstName: firstName[i], lastName: lastName[i], age: age[i] };
}
//
let minMaxFge = users.filter((item) => {
  return item.age <= 18;
});

let pushFullName = users.forEach(
  (user) => (user.fullName = user.firstName + " " + user.lastName)
);
let getFullName = users.reduce((accum, item) => {
  accum.push(item.fullName);
  return accum;
}, []);

//4.Напишите функцию аналог метода массива shift. Функция удаляет
// из переданного в параметре массива первый элемент.
function deleteFirstElem(arr) {
  arr.splice(0, 1);
}

//5.Напишите функцию аналог метода массива push. Функция добавляет
// в конец переданного в параметре массив произвольное количество элементов.
function deleteFirstElem(arr) {
  arr.splice(arr.length - 1, 1);
}

// 6.Напишите функцию аналог метода Object.assign(). Первый параметр
// функции - целевой объект, поля которого будут изменены или расширены.
// Остальные параметры - объекты-источники, полями которых будет
// расширяться целевой объект.
//    var source = {firstname: 'Tom', age: 10}
//    var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
//    console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

const source = { firstname: "Tom", age: 10 };
const extend = (source, ...arg) => {
  let obj = { ...source };
  for (let i = 0; i < arg.length; i++) {
    for (let key in arg[i]) {
      obj[key] = arg[i][key];
    }
  }
  return obj;
};
let s = extend(source, { firstname: "John" }, { lastname: "Doe" });
//7.Напишите функцию setComment с параметрами: date, message,
// author. Дата и текст сообщения - обязательные параметры,
//если какой-то из них или оба отсутствуют, то выполнение функции
//должно обрываться, а пользователю выдаваться предупреждение (alert)
//о том, что данные переданы некорректно. Параметр author -
// опциональный, но должна происходить проверка: если параметр
// не передан, то вместо него подставляется значение ‘Anonymous’.
// Функция распечатывает в консоле текст в формате:
//          <имя_автора>, <дата>
//          <текст_сообщения>

let setComment = (date, message, author = "Anonymous") => {
  if (date === undefined || message === undefined) {
    return alert("Данные переданы некорректно");
  }
  console.log(`${author}, ${date}
${message}`);
};
setComment("2016-11-02", "Everything is ok", "John");
setComment("2016-11-02", "You could do it better!");
