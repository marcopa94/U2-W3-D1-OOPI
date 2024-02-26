class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static confrontoEta(user1, user2) {
    if (user1.age < user2.age) {
      console.log(`${user1.firstName} è più giovane di ${user2.firstName}.`);
    } else if (user1.age > user2.age) {
      console.log(`${user1.firstName} è più anziano di ${user2.firstName}.`);
    } else {
      console.log(`${user1.firstName} ha la stessa età di ${user2.firstName}.`);
    }
  }
}

const user1 = new User("alfio", "battiato", 18, "Africa");
const user2 = new User("marco", "pala", 20, "Nuova America");

User.confrontoEta(user1, user2);
//_____________________________________________--------------------------------------------------
/* const btn = document.querySelector("button"); */
const formNode = document.querySelector("form");
const nome = document.getElementById("fname");
const proprietario = document.getElementById("lname");
const specie = document.getElementById("species");
const razza = document.getElementById("breed");

const animalss = [];

class Animali {
  constructor(nome, proprietario, specie, razze) {
    this.nome = nome;
    this.proprietario = proprietario;
    this.specie = specie;
    this.razze = razze;
  }
}
formNode.onsubmit = function (e) {
  e.preventDefault();

  const animals = new Animali(nome.value, proprietario.value, specie.value, razza.value);
  animalss.push(animals);
  const paragrafo = document.createElement("p");
  const div = document.getElementsByClassName("contenitore")[0];
  div.appendChild(paragrafo);
  paragrafo.innerText =
    "Il nome è : " +
    " " +
    nome.value +
    " " +
    "Il proprietario si chiama" +
    proprietario.value +
    " " +
    " " +
    "La specie è" +
    " " +
    " " +
    specie.value +
    " " +
    "La razza è la seguente" +
    " " +
    razza.value;
  console.log(animals);
};
