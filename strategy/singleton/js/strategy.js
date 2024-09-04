class SaleContext {
     constructor(strategy) {
          this.strategy = strategy;
     }

     setStrategy(strategy) {
          this.strategy = strategy;
     }

     calculate(amount) {
          return this.strategy.calculate(amount);
     }
}

class RegularSaleStrategy {
     constructor(tax) {
          this.tax = tax;
     }

     calculate(amount) {
          return amount + (amount * this.tax);
     }
}

class DiscountSaleStrategy {
     constructor(tax, discount) {
          this.tax = tax;
          this.discount = discount;
     }

     calculate(amount) {
          return amount + (amount * this.tax) - (amount * this.discount);
     }
}

class ForeingSaleStrategy {
     getDollarPrice() {
          return 20;
     }

     calculate(amount) {
          return amount * this.getDollarPrice();
     }
}


const regularSale = new RegularSaleStrategy(0.16);
const discountSale = new DiscountSaleStrategy(0.16, 0.10);
const foreingSaleStrategy = new ForeingSaleStrategy();
const sale = new SaleContext(regularSale);

console.log(sale.calculate(100)); // Debería imprimir 116

sale.setStrategy(discountSale);
console.log(sale.calculate(100));

sale.setStrategy(foreingSaleStrategy);
console.log(sale.calculate(100));

const data = [
     {
          name: "Ford",
          country: "USA",
          info: "Fabricante de autos estadounidence"
     }, {
          name: "Nissan",
          country: "Japon",
          info: "Fabricante de autos japones"
     }, {
          name: "Toyota",
          country: "Japon",
          info: "Fabricante de autos japones"
     }
]

class InfoContext {

     constructor(strategy, data, element) {
          this.strategy = strategy;
          this.data = data;
          this.element = element;
     }

     setStrategy(strategy) {
          this.strategy = strategy;
     }

     show() {
          this.strategy.show(this.data, this.element);
     }

}

class ListStrategy {

     show(data, element) {
          element.innerHTML = data.reduce((ac, e) => {
               return ac + `<div>
                    <h2>${e.name}</h2>
                    <p>${e.country}</p>
               </div>
               <hr>`
          }, "");
     }
}

class DetailListStrategy {

     show(data, element) {
          element.innerHTML = data.reduce((ac, e) => {
               return ac + `<div>
                    <h2>${e.name}</h2>
                    <p>${e.country}</p>
                    <p>${e.info}</p>
               </div>
               <hr>`
          }, "");
     }
}

const strategias = [new ListStrategy(), new DetailListStrategy()];

const info = new InfoContext(new ListStrategy(), data, content);
info.show();

slcOptions.addEventListener("change", (e) => {

     const op = e.target.value;
     console.log(op)
     info.setStrategy(strategias[op]);
     info.show();
})