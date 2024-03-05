let pippi = {
  firstName: "Pippi",
  lastName: "Poppi",
  age: 22,
  location: "London",
};

class User {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.lastName = "Rossi";
    this.age = age;
    this.location = "Rome";
  }

  compareAges() {
    if (pippi.age == this.age) {
      return `${pippi.firstName} e ${this.firstName} sono coetanee`;
    } else if (pippi.age > this.age) {
      return `${pippi.firstName} è più piccola di ${this.firstName}`;
    } else {
      return `${this.firstName} è più grande di ${pippi.firstName}`;
    }
  }
}

let sara = new User("Sara", 29);
let result = sara.compareAges();
console.log(result);

let userInfo = document.getElementById("info");

class Pet {}
