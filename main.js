// console.log("ok js");

/*
Data una lista della spesa (inventatela),
 stampare in pagina gli elementi della
  lista individualmente con un ciclo while.
  (anche brutalmente, basta che si vedano)
 */

const target = document.getElementById("target");
const list = ["banana", "fragola", "caramelle"];
console.log([list]);

let i = 0;
while (i < list.length) {
  i++;
  console.log([i]);
}

target.innerHTML = `
<ul>
<li>${list[0]}</li>
<li>${list[1]}</li>
<li>${list[2]}</li>
</ul>`;
