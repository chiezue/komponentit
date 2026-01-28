const opiskelija = {
  nimi: "Matti Meikäläinen",
  ika: 22,
  kurssi: "Ohjelmoinnin perusteet",
};

console.log("Opiskelija:");
console.log(`Nimi: ${opiskelija.nimi}`);
console.log(`Ikä: ${opiskelija.ika}`);
console.log(`Kurssi: ${opiskelija.kurssi}`);
class Auto {
  constructor(merkki, malli, vuosimalli) {
    this.merkki = merkki;
    this.malli = malli;
    this.vuosimalli = vuosimalli;
  }

  tulostaTiedot() {
    console.log(`${this.merkki} ${this.malli} (${this.vuosimalli})`);
  }
}

const auto1 = new Auto("Toyota", "Corolla", 2015);
const auto2 = new Auto("Tesla", "Model 3", 2022);

console.log("\nAutot:");
auto1.tulostaTiedot();
auto2.tulostaTiedot();
const kirjat = [
  { nimi: "Tuntematon sotilas", kirjailija: "Väinö Linna", vuosi: 1954 },
  { nimi: "1984", kirjailija: "George Orwell", vuosi: 1949 },
  { nimi: "Harry Potter", kirjailija: "J.K. Rowling", vuosi: 1997 },
];

console.log("\nKirjat:");
kirjat.forEach((kirja) => {
  console.log(`${kirja.nimi} – ${kirja.kirjailija} (${kirja.vuosi})`);
});
const numerot = [10, 20, 30, 40];

const [eka, ...loput] = numerot;

console.log(eka);
console.log(loput);
const student = {
  nimi: "Ville",
  ika: 34,
  koulutus: "Datanomi",
  kaupunki: "Helsinki",
};

const { nimi, ika, ...muutTiedot } = opiskelija;

console.log(nimi);
console.log(ika);
console.log(muutTiedot);
const backend = ["Node.js", "SQL"];
const frontend = ["HTML", "CSS", "JavaScript"];

const fullstack = [...backend, ...frontend, "Git"];

console.log(fullstack);
const perusTiedot = {
  nimi: "Anna",
  ika: 19,
};

const lisatiedot = {
  kaupunki: "Espoo",
  harrastus: "Ohjelmointi",
};

const kayttaja = {
  ...perusTiedot,
  ...lisatiedot,
  aktiivinen: true,
};

console.log(kayttaja);
