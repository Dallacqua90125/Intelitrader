class Order{
    constructor(position, action, value, quantity){
        this.position = position;
        this.action = action;
        this.value = value;
        this.quantity = quantity;
    }
    toString(){
        return `${this.position}, ${this.value}, ${this.quantity}`;
    }
}
class OrderBook{
    constructor(){
       this.orders = [];

    }
    updateOrderBook(position, action, value, quantity){
        const newOrder = new Order(position, action, value, quantity);
        switch (action) {
            case 0:
                this.insertOrder(newOrder);
                break;
            case 1:
                this.modifyOrder(newOrder);
                break;
            case 2 :
                this.deleteOrder(newOrder);
                break;
        }
    }
    insertOrder(order){
        if (!this.verifiPosition(order)) {
            this.orders.push(order)
        }
    }
    modifyOrder(order){
        for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].position === order.position) {
                if (order.value === 0) {
                    order.value = this.orders[i].value
                }else{
                    this.orders[i].value = order.value
                }
                if (order.quantity === 0) {
                    order.quantity = this.orders[i].quantity
                }else{
                    this.orders[i].quantity = order.quantity
                }
                return
            }   
        }
    }
    deleteOrder(order){
        for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].position === order.position) {
                this.orders.splice(i, 1);
                this.realingPosition();
                return;
            }
            
        }
    }
    realingPosition(){
        for (let i = 0; i < this.orders.length; i++) {
            this.orders[i].position = i + 1
            
        }
    }
    verifiPosition(order){
        for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].position === order.position) {
                this.orders[i] = order
                return true
            }
            
        }
        return false
    }

    showOrderBook() {
        this.orders.forEach(order => {
            console.log(order.toString());
        });
    }
}

class Program {
    static main() {
        const array = [
            1, 0, 15.4, 50,
            2, 0, 15.5, 50,
            2, 2, 0, 0,
            2, 0, 15.4, 10,
            3, 0, 15.9, 30,
            3, 1, 0, 20,
            4, 0, 16.50, 200,
            5, 0, 17.00, 100,
            5, 0, 16.59, 20,
            6, 2, 0, 0,
            1, 2, 0, 0,
            2, 1, 15.6, 0
        ];

        const orderBook = new OrderBook();

        for (let i = 0; i < array.length; i += 4) {
            const position = array[i];
            const action = array[i + 1];
            const value = array[i + 2];
            const quantity = array[i + 3];

            orderBook.updateOrderBook(position, action, value, quantity);
        }

        orderBook.showOrderBook();
    }
}

Program.main();