const deliverPizza = pizzaName => `Delivering ${pizzaName} pizza.`;

const makePizza = pizzaName => `Pizza ${pizzaName} is being prepared, please wait...`;

const makeMessage = (pizzaName, callback) => callback(pizzaName);

const result = makeMessage("Margarita", makePizza)

console.log(result);