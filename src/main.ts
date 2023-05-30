console.log("Welcome to the Strategy Design Pattern Exercise")


class ShoppingCart {
    private items: string[];
    
    constructor() {
      this.items = [];
    }
  
    addItem(item: string): void {
      this.items.push(item);
    }
  
    payCash(amount:number) {
        console.log(`Paid things: ${amount}`)
    }
    
    checkout(): void {
      const totalAmount = this.calculateTotalAmount();
      this.payCash(totalAmount);
      this.items = [];
    }
  
    private calculateTotalAmount(): number {
      // Calculate the total amount based on items
      return this.items.length * 10;
    }
  }
  
  // Usage example
  const cart = new ShoppingCart();
  
  // Add items to the shopping cart
  cart.addItem("Item 1");
  cart.addItem("Item 2");
  cart.addItem("Item 3");
  
  cart.checkout();
  // Output: "Paying $30 with credit card 1234567890123456"
  cart.checkout();