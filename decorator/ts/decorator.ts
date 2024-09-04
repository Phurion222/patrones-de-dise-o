interface Component {
    getDetail(): string;
}

class ProductComponent implements Component {

    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
    public getDetail(): string {
        return this.name;
    }

}

abstract class ProductDecorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    public getDetail(): string {
        return this.component.getDetail();
    }
}

//Decorador 1
class ComercialInfoProductDecorator extends ProductDecorator {
    private tradename: string;
    private brand: string;

    constructor(component: Component, tradename: string, brand: string) {
        super(component);
        this.tradename = tradename;
        this.brand = brand;
    }

    public getDetail(): string {
        return `${this.tradename} ${this.brand} ` + super.getDetail();
    }
}

//Decorador 2
class StoreProductDecorator extends ProductDecorator {
    private price: number;
    constructor(component: Component, price: number) {
        super(component);
        this.price = price;
    }

    public getDetail(): string {
        return super.getDetail() + ` ${this.price}`;
    }
}

//Decorador 3
class HTMLProductDecorator extends ProductDecorator {
    getDetail(): string {
        return `<h1>Informacion del producto</h1>
        <p>${super.getDetail()}</p>`;
    }
}

//Ejecucion
//Component
const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail());

//Decorador 1 con component
const commercialInfoProduct = new ComercialInfoProductDecorator(productComponent, "London Porter", "Fuller's");
console.log(commercialInfoProduct.getDetail());

//Decorador 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 2.5);
console.log(storeProduct.getDetail());

//Decorador 2 con decorador 1
const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 15.5);
console.log(storeProduct2.getDetail());

//Decorador 3 con decorador 2 con decorador 1
const htmlProduct = new HTMLProductDecorator(storeProduct2);
console.log(htmlProduct.getDetail());