interface iSmartphone {
  credito: number;
  numeroChiamate: number;
}
class User implements iSmartphone {
  credito: number = 0;
  numeroChiamate: number = 0;
  costoMinuto: number = 0.2;
  nome: string;
  cognome: string;
  constructor(nome: string, cognome: string, credito?: number) {
    this.nome = nome;
    this.cognome = cognome;
    this.credito = credito || 0;
  }
  ricarica(credito: number): void {
    this.credito += credito;
  }
  chiamata(minuti: number): void {
    let costo = this.costoMinuto * minuti;
    this.credito -= costo;
    this.numeroChiamate++;
  }
  chiama404(): string {
    return this.credito + "euro";
  }
  getNumberoChiamate(): number {
    return this.numeroChiamate;
  }
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}
let user = new User("Sara", "Porricino");
user.ricarica(50);
user.chiamata(20);
