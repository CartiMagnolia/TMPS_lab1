// Interfata pentru produse
class Product {
    constructor(options) {
        this.name = options.name;
        this.color = options.color;
        this.size = options.size;
    }

    getDescription() {}
}

// Interfata pentru fabrica abstracta
class ProductFactory {
    createProduct(options) {}
}

// Implementam o fabrica care produce produse
class CustomProductFactory extends ProductFactory {
    createProduct(options) {
        if (options.type === 'tshirt') {
            return new TShirt(options);
        } else if (options.type === 'mug') {
            return new Mug(options);
        } else if (options.type === 'glass') {
            return new Glass(options);
        } else {
            throw new Error('Invalid product type');
        }
    }
}

// Implementam produse
class TShirt extends Product {
    getDescription() {
        return `${this.color} ${this.size} ${this.name}`;
    }
}

class Mug extends Product {
    getDescription() {
        return `${this.color} ${this.name}`;
    }
}

class Glass extends Product {
    getDescription() {
        return `${this.color} ${this.name}`;
    }
}

// Utilizam fabrica pentru a crea produse personalizate
const factory = new CustomProductFactory();

const tshirt = factory.createProduct({
    type: 'tshirt',
    name: 'My Custom T-Shirt',
    color: 'Red',
    size: 'Medium'
});

console.log(tshirt.getDescription());

const mug = factory.createProduct({
    type: 'mug',
    name: 'My Custom Mug',
    color: 'Blue'
});

console.log(mug.getDescription());

const glass = factory.createProduct({
    type: 'glass',
    name: 'My Custom Glass',
    color: 'Green'
});

console.log(glass.getDescription());

