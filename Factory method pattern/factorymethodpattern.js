"use strict";

// Our pizzas
function HamAndMushroomPizza() {
	var price = 8.50;
	this.getPrice = function() {
		return price;
	};
}

function DeluxePizza() {
	var price = 10.50;
	this.getPrice = function() {
		return price;
	};
}

function SeafoodPizza() {
	var price = 11.50;
	this.getPrice = function() {
		return price;
	};
}

// Pizza Factory
function PizzaFactory() {
	this.createPizza = function(type) {
		switch(type) {
			case "Ham and Mushroom":
				return new HamAndMushroomPizza();
			case "DeluxePizza":
				return new DeluxePizza();
			case "Seafood Pizza":
				return new SeafoodPizza();
			default:
				return new  DeluxePizza();
		}
	};
}

// Usage
var pizzaPrice = new PizzaFactory().createPizza("Ham and Mushroom").getPrice();
console.log(pizzaPrice);