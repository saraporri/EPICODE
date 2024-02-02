/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(L1 = 2, L2 = 3) {
  return L1 * L2;
}
console.log(area());
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/ function crazySum(a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
}
crazySum();
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff(n) {
  let c = Math.abs(n, 19);
  if (c >= 19) {
    console.log(c * 3);
  } else {
    return console.log(19 - n);
  }
}
console.log(crazyDiff(4));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/ function boundary(n = 200) {
  (n >= 20 && n <= 100) || n === 400;
}
boundary();
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(a) {
  if (a.startsWith("epicode")) {
  } else return "epicode " + a;
}
console.log(epify("gandalf"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/ function check3and7(n) {
  let result;
  if (n % 3 === 0 || n % 7 === 0) {
    true;
  }
  return false;
}
console.log(check3and7(9));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(a = "gandalf") {
  reversed = a.split("").reverse().join("");
  return console.log(reversed);
}
reverseString();
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
function upperFirst(a) {
  const maiuscola = a.split(" ");
  let risultato = [];
  for (i = 0; i < maiuscola.length; i++) {
    maiuscola[i] = maiuscola[i][0].toUpperCase() + maiuscola[i].slice(1);
    let maiuscola = risultato.push(parolaCompleta);
  }

  return risultato.join(" ");
}
let fraseModificata = upperFirst("la compagnia dell'anello");
console.log(fraseModificata);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(a = "la compagnia dell'anello") {
  cutted = a.slice(1, -1);
  return console.log(cutted);
}
cutString();
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n) {
  let arrandom = [];
  for (let i = 0; i < n; i++) arrandom.push(Math.floor(Math.random() * 11));
  return arrandom;
}
console.log(giveMeRandom(3));
/* SCRIVI QUI LA TUA RISPOSTA */
