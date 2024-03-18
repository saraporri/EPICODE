"use strict";
class User {
    constructor(nome, cognome, credito) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.2;
        this.nome = nome;
        this.cognome = cognome;
        this.credito = credito || 0;
    }
    ricarica(credito) {
        this.credito += credito;
    }
    chiamata(minuti) {
        let costo = this.costoMinuto * minuti;
        this.credito -= costo;
        this.numeroChiamate++;
    }
    chiama404() {
        return this.credito + "euro";
    }
    getNumberoChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let user = new User("Sara", "Porricino");
user.ricarica(50);
user.chiamata(20);
