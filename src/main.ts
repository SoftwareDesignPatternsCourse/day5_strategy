console.log("Welcome to the Strategy Design Pattern Exercise")



class CartItem {
  private amount:number;
  private description:string;

  constructor(amount:number, description: string) {
    this.amount = amount;
    this.description = description;
  }

  getAmount():number {
    return this.amount;
  }
  getDescription():string {
    return this.description;
  }
}

class ShoppingCart {
    private items: CartItem[];
    
    constructor() {
      this.items = [];
    }
  
    addItem(item: CartItem): void {
      this.items.push(item);
    }
  
    
    
    checkout(): void {
      console.log("Paying: " + this.calculateTotalAmount());
      // call our paymentStrategy
    }
  
    private calculateTotalAmount(): number {
      let total = 0;
      this.items.forEach(item => {
        total += item.getAmount();
      })
      return total;
    }
  }
  
  // Usage example
  const cart = new ShoppingCart();
  
  // Add items to the shopping cart
  cart.addItem(new CartItem(1000, "Iphone"));
  cart.addItem(new CartItem(2000, "Macbook"));
  cart.addItem(new CartItem(1500, "Asus"));
  
  cart.checkout();
  // Output: "Paying $30 with credit card 1234567890123456"
  cart.checkout();