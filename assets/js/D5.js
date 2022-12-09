/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("------------- ESERCIZIO 1 -------------");

const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("------------- ESERCIZIO 2 -------------");

const petsSorted = [];

for (let i = 0; i < pets.length; i++) {
  petsSorted.push(pets[i]);
  petsSorted.sort();
}

console.log(petsSorted);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("------------- ESERCIZIO 3 -------------");

//non sapenso se fosse possibile utilizzare pets.reverse() ho creato un for loop adeguato

for (let i = pets.length - 1; i > -1; i = i - 1) {
  console.log(pets[i]);
}
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("------------- ESERCIZIO 4 -------------");

let ultimo = pets.pop();
let primo = pets.shift();

pets.push(primo);
pets.unshift(ultimo);

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

console.log("------------- ESERCIZIO 5 -------------");

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "B";
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("------------- ESERCIZIO 6 -------------");

const nuovaMacchina = {
  brand: "Audi",
  model: "A3",
  color: "Silver",
  trims: ["sportback", "elegance", "s-line"],
  licensePlate: "B",
};

cars.push(nuovaMacchina);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

console.log("------------- ESERCIZIO 7 -------------");

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("------------- ESERCIZIO 8 -------------");

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

console.log("------------- ESERCIZIO 9 -------------");

let whileIndex = 0;

while (whileIndex < numericArray.length) {
  console.log(numericArray[whileIndex]);
  if (numericArray[whileIndex] === 32) {
    break;
  }
  whileIndex++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]


    A B C D E F G H I L M N O P Q R S T U V Z
    1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1

*/
const charactersArray = ["g", "n", "u", "z", "d"];

console.log("------------- ESERCIZIO 10 ------------");
const numericConversion = [];
let toAdd = -1;
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "g":
      toAdd = 7;
      break;
    case "n":
      toAdd = 12;
      break;
    case "u":
      toAdd = 19;
      break;
    case "z":
      toAdd = 21;
      break;
    case "d":
      toAdd = 4;
      break;
    default:
      break;
  }
  numericConversion.push(toAdd);
}
console.log(numericConversion);
