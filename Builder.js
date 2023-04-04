class Product {
    constructor() {
        this.name = null;
        this.description = null;
        this.price = null;
    }
}

class ProductBuilder {
    constructor() {
        this.product = new Product();
    }

    setName(name) {
        this.product.name = name;
        return this;
    }

    setDescription(description) {
        this.product.description = description;
        return this;
    }

    setPrice(price) {
        this.product.price = price;
        return this;
    }

    build() {
        return this.product;
    }
}

class ProductDirector {
    constructor(builder) {
        this.builder = builder;
    }

    buildProduct1() {
        return this.builder
            .setName('Product 1')
            .setDescription('This is product 1')
            .setPrice(100)
            .build();
    }

    buildProduct2() {
        return this.builder
            .setName('Product 2')
            .setDescription('This is product 2')
            .setPrice(200)
            .build();
    }
}

const productBuilder = new ProductBuilder();
const productDirector = new ProductDirector(productBuilder);

const product1 = productDirector.buildProduct1();
const product2 = productDirector.buildProduct2();

console.log(product1);
console.log(product2);
