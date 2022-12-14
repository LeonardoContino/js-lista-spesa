// console.log("ok js");

/*
Data una lista della spesa (inventatela),
 stampare in pagina gli elementi della
  lista individualmente con un ciclo while.
  (anche brutalmente, basta che si vedano)
 */

let target = document.getElementById("target");
const list = ["banana", "fragola", "ananas"];

let i = 0;
while (i < list.lenght) {
  console.log(list[i]);
  i++;
}
