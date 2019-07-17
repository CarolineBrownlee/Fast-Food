const restaurant = {
    name: "Bob's Burgers",
    orders: [ ],
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    getOrders: function ( ) {
        return this.orders
    }
}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "large"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)

// Invoke the function to return the list of all orders
const orders = restaurant.getOrders();
// Output all orders to the console using console.table()
console.table(orders);