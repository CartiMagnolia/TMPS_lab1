// Clase de baza pentru bauturi
class Bautura {
    constructor() {
        this.nume = "";
        this.pret = 0;
    }

    descriere() {
        return `${this.nume} - ${this.pret} Lei`;
    }
}

// Clasele de bauturi specifice
class CafeLatte extends Bautura {
    constructor() {
        super();
        this.nume = "Cafe Latte";
        this.pret = 35;
    }
}

class Cappuccino extends Bautura {
    constructor() {
        super();
        this.nume = "Cappuccino";
        this.pret = 40;
    }
}

class Espresso extends Bautura {
    constructor() {
        super();
        this.nume = "Espresso";
        this.pret = 25;
    }
}

// Clasa pentru creare
class FabricaDeBauturi {
    constructor() {
        this.bauturi = [];
    }

    createBautura(tip) {
        let bautura;
        if (tip === "cafe latte") {
            bautura = new CafeLatte();
        } else if (tip === "cappuccino") {
            bautura = new Cappuccino();
        } else if (tip === "espresso") {
            bautura = new Espresso();
        } else {
            throw new Error(`Tip de bautura nevalid: ${tip}`);
        }
        this.bauturi.push(bautura);
        return bautura;
    }
}

// Utilizăm clasa de fabrică pentru a crea băuturi
const fabricaDeBauturi = new FabricaDeBauturi();
const cafeLatte = fabricaDeBauturi.createBautura("cafe latte");
const cappuccino = fabricaDeBauturi.createBautura("cappuccino");
const espresso = fabricaDeBauturi.createBautura("espresso");
console.log(cafeLatte.descriere());
console.log(cappuccino.descriere());
console.log(espresso.descriere());
