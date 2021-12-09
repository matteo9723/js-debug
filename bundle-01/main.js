/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// CORREZIONE

// ESERCIZIO 1

// 1- Che cosa fa questo codice? 
// 1) Esegue un ciclo che stampa in console il valore i fino a quando i resta minore di 5 
// 2- Sono presenti errori di sintassi?no
// 3- Sono presenti errori logici?si

// esercizio 1 corretto

// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// ESERCIZIO 2

// 1- Che cosa fa questo codice? 
// 1) crea una funzione che restituisce il valore che gli è stato passato più 5 se il numero è pari se no restituisce il numero che gli è stato passato senza cambiare niente
// 2- Sono presenti errori di sintassi?si
// 3- Sono presenti errori logici?si la funzione non viene chiamata

// esercizio 2 corretto

// ESERCIZIO 2

const x = addIfEven(5);

console.log(x);

function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}

// ESERCIZIO 3

// 1- Che cosa fa questo codice? 
// 1) crea un ciclo che stampa in console il valore i fino a  quando i è minore di 5
// 2- Sono presenti errori di sintassi?si
// 3- Sono presenti errori logici?no

// esercizio 3 corretto

// ESERCIZIO 3

function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// ESERCIZIO 4

// 1- Che cosa fa questo codice? 
// 1) crea un ciclo che stampa in console il valore i fino a  quando i è minore di 5
// 2- Sono presenti errori di sintassi?si
// 3- Sono presenti errori logici?si

// esercizio 4 corretto

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)

const x = displayEvenNumbers();
console.log(x);

function displayEvenNumbers() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let evenNumbers = [];
  for (let i = 0; i < numbers.length ; i++) {
      if (numbers[i] % 2 == 0){
          evenNumbers.push(numbers[i]);
      }
  }
  return evenNumbers;
}
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
