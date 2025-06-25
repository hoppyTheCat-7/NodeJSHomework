// * Bonus: resete gi students.js do zadaca broj 3

const studenti = [
  { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Bitola" },
  { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
  { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
  { ime: "Vancho", prosek: 10, grad: "Tetovo" },
  { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

// 1. Сите студенти од Скопје | чие име завршува на а | и имаат просек над 7,| подредени по име (растечки).
const skStudentNamesEndingInA = studenti
  .filter((student) => student.grad === "Skopje" && student.ime.endsWith("a") && student.prosek >= 7)
  .sort((a, b) => {
  if (a.ime < b.ime) return -1;
  })
  .map((student) => student.ime);

console.log(skStudentNamesEndingInA);

// 2. Сите студенти кои имаат просек над 9 | и не се од Скопје,| подредени по просек опаѓачки.
const outOfSkTopStudents = studenti
  .filter((student) => student.prosek >= 9 && student.grad !== "Skopje")
  .sort((a, b) => b.prosek - a.prosek)
  .map((student) => student.ime);

console.log(outOfSkTopStudents);

// 3. Првите 3 студенти | кои имаат имиња од 5 карактери,| подредени по просек.
const fiveCharStudentNames = studenti
  .filter((student) => student.ime.length === 5).slice(0, 3)
  .sort((a, b) => b.prosek - a.prosek)
  .map((student) => student.ime);

console.log(fiveCharStudentNames);

// ===================================================================================================
// 4. Градови подредени по групна висина на просек.
// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.
