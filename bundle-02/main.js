/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
     const email = addresses[i];
        
      if (userEmail.length > 5) {
            
        if (email === userEmail) {
        grantAccess = 'true';            
            
      }
        
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccessImproved();

// correzione esercizio 1  

// 1- Che cosa fa questo codice?crea una funzione che stampa in console la variabile message . Se la constante myAge è minore di 18 assegnerà a message un stringa , se invece è maggiore gliene assegnerà un'altra 
// 2- Sono presenti errori di sintassi?no
// 3- Sono presenti errori logici?si , message deve essere una variabile , non una costante

checkAge();

function checkAge() {
  const myAge = 32;
  let message = '';

  if (myAge < 18) {
      message = `Sei troppo giovane! Hai ${myAge} anni!`;
      console.log(message);
  } else {
      message = 'Hai più di 18 anni!';
      console.log(message);
  }
}

// correzione esercizio 2  

// 1- Che cosa fa questo codice?crea una funzione che stampa in console una stringa con il numero di componenti dell'array
// 2- Sono presenti errori di sintassi?si
// 3- Sono presenti errori logici?no

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

// correzione esercizio 3  

// 1- Che cosa fa questo codice?stampa in console una stringa con all'interno la costante total che è  la somma del numero chiesto all'utente più 12
// 2- Sono presenti errori di sintassi?no
// 3- Sono presenti errori logici?si , si concatena una stringa ad un numero


// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// correzione esercizio 4  

// 1- Che cosa fa questo codice?stampa in console una stringa di accesso consentito se la mail inserita nel prompt è inclusa nell'array userEmail, se no stampa un'altra stringa di acccesso negato
// 2- Sono presenti errori di sintassi?no
// 3- Sono presenti errori logici?si , false e true devono essere due valori booleani , non due stringhe

// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// correzione esercizio 5  

// 1- Che cosa fa questo codice?stampa in console una stringa di accesso consentito se la mail inserita nel prompt è uguale a Email, se no stampa un'altra stringa di acccesso negato
// 2- Sono presenti errori di sintassi?si , mancava una graffa che serviva per chiudere la funzione
// 3- Sono presenti errori logici?no


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
  
    const userEmail = prompt('Inserisci il tuo indirizzo email');
  
    let grantAccess = false;
  
    for (let i = 0; i < addresses.length; i++) {
     const email = addresses[i];
        
      if (userEmail.length > 5) {
            
        if (email === userEmail) {
        grantAccess = 'true';            
            
      }
        
    }
  
    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
  }
  }
  checkAccessImproved();






















