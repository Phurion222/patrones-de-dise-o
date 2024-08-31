class SaleContext{
     constructor(strategy){
          this.strategy = strategy;
     }

     setStrategy(strategy){
          this.strategy = strategy;
     }

     calculate(amount){
          return this.strategy.calculate(amount);
     }
}

class RegularSaleStrategy{
     constructor(tax){
          this.tax = tax;
     }

     calculate(amount){
          return amount + (amount * this.tax);
     }
}

class DiscountSaleStrategy{
     constructor(tax, discount){
          this.tax = tax;
          this.discount = discount;
     }

     calculate(amount){
          return amount + (amount * this.tax) - (amount * this.discount);
     }
}

class ForeingSaleStrategy{
     getDollarPrice(){
          return 20;
     }

     calculate(amount){
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