
class Inventory {
  constructor(arr) {
    this.inventory = arr;
  }

  addProduct(prod) {
    this.inventory.push(prod);
  }

  rmvProduct(prod = null) {
    if (prod === null) {
      this.inventory.pop();
    }
    let index = this.inventory.indexOf(prod);
    if (index != -1) {
      this.inventory.splice(index, 1);
    }
  }

  printArr() {
    console.log(this.inventory);
  }

  getDescriptions() {
    return this.inventory.map((elem) => {
      return elem.description;
    })
  }
}

class Product {
  constructor(id, name, description, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }

  
}

class ElectronicProduct extends Product {
  constructor(id, name, price, description, warranty) {
    super(id, name, price, description);
    this.warranty = warranty;
  }
}

let inventory = new Inventory([]);
inventory.addProduct(new Product(1, "tape", "Used To Stick things", 2.50));
inventory.addProduct(new Product(2, "soy sauce", "Put It On Your Rice", 3));
inventory.addProduct(new Product(3, "eggs", "fry em in a pan", 2.75));
inventory.printArr();
console.log(inventory.getDescriptions());
