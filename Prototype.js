class Produs {
    constructor(nume, pret, stoc) {
        this.nume = nume;
        this.pret = pret;
        this.stoc = stoc;
    }

    cloneaza() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

    afiseazaDetalii() {
        console.log(`Nume: ${this.nume}, Pret: ${this.pret}, Stoc: ${this.stoc}`);
    }
}

// Produs de baza
const laptop = new Produs("Laptop", 3000, 10);

// Clonam produsul pentru un produs nou
const laptopNou = laptop.cloneaza();
laptopNou.nume = "Laptop Nou";
laptopNou.pret = 3500;

const laptopVechi = laptop.cloneaza();
laptopVechi.nume = "Laptop Vechi";
laptopVechi.pret = 2500;

// Mai creeam inca un produs de baza
const tableta = new Produs("Tableta", 2000, 5);

// Clonam produsul pentru un produs nou
const tabletaNoua = tableta.cloneaza();
tabletaNoua.nume = "Tableta Noua";
tabletaNoua.pret = 2500;

laptop.afiseazaDetalii();
laptopNou.afiseazaDetalii();
laptopVechi.afiseazaDetalii();
tableta.afiseazaDetalii();
tabletaNoua.afiseazaDetalii();
