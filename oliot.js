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
