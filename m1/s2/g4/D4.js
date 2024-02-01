/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(L1 = 2, L2 = 3) {
  console.log(L1 * L2);
}
area();
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/ function crazySum(a = 2, b = 1) {
  if (a === b) {
    let c = a + b;
    console.log(c * 3);
  } else {
    return console.log(a + b);
  }
}
crazySum();
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff(a = 83, p = 19) {
  let c = Math.abs(a, p);
  if (c >= p) {
    console.log(c * 3);
  } else {
    return console.log(p - a);
  }
}
crazyDiff();
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/ function boundary(n = 200) {
  if ((n >= 20 && n <= 100) || n === 400) {
    console.log(true);
  } else return console.log(false);
}
boundary();
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(a = "gandalf") {
  if (a.startsWith("epicode")) {
    console.log(a);
  } else return console.log("epicode " + a);
}
epify();
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/ function check3and7(n = 9) {
  if (n % 3 === 0 || n % 7 === 0) {
    console.log(n + " è divisibile per 3 o 7");
  } else return console.log(n + "non è divisibile per 3 o 7");
}
check3and7();
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
function upperFirst(a = "la compagnia dell'anello") {
  const maiuscola = a.split(" ");

  for (i = 0; i < maiuscola.length; i++) {
    maiuscola[i] = maiuscola[i][0].toUpperCase() + maiuscola[i].slice(1);
  }

  return console.log(maiuscola.join(" "));
}
upperFirst();
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
function giveMeRandom(n = 2) {
  let random = [Math.floor(Math.random) * 11];
  return console.log(random);
}
giveMeRandom();
/* SCRIVI QUI LA TUA RISPOSTA */
