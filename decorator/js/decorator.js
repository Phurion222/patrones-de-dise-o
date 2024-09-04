//Component
class ProductComponent {
    constructor(name) {
        this.name = name;
    }

    getDetail() {
        return ` ${this.name}`;
    }
}

//Decorator
class ProductDecorator {
    constructor(ProductComponent) {
        this.ProductComponent = ProductComponent;
    }

    getDetail() {
        return this.ProductComponent.getDetail();
    }
}

class CommercialInfoProductDecorator extends ProductDecorator {
    constructor(productComponent, tradename, brand) {
        super(productComponent);
        this.tradename = tradename;
        this.brand = brand;
    }

    getDetail() {
        return `${this.tradename}, ${this.brand}` + super.getDetail();
    }
}

//Decorador 2
class StoreProductDecorator extends ProductDecorator {
    constructor(productComponent, precio) {
        super(productComponent);
        this.precio = precio;
    }

    getDetail() {
        return super.getDetail() + ` $${this.precio}`;
    }
}

//Decorador 3
class HTMLProductDecorator extends ProductDecorator {
    getDetail() {
        return `<h1>Informacion del producto</h1>
        <p>${super.getDetail()}</p>`;
    }
}

//Ejecucion
//Component
const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail()); // Output: Cerveza

//Decorador 1 con componente
const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "London Porter", "Fuller's")
console.log(commercialInfoProduct.getDetail()); // Output: London Porter, Fuller's Cerveza

//Decorador 2 con componentes
const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetail()); // Output: London Porter, Fuller's Cerveza 15.5

//Decorador 2 con decorador 1
const product = new StoreProductDecorator(commercialInfoProduct, 16);
console.log(product.getDetail()); // Output: London Porter, Fuller's Cerveza 16

//Decorador 3 con decorador 2 y 1
const htmlProductDecoratior = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlProductDecoratior.getDetail();

