/* JAVASCRIPT SHORTHANDS */

/* For loop */

// Longhand
const fruits = [apples, oranges, bananas];
for (let i = 0; i < fruits.length; i++)
  // Shorthand
  for (let fruit of fruits);

// If accessing index
for (let index in fruits);

/* Short Circuit Evaluation */

// Longhand
var dbHost;
if (process.env.DB_HOST) {
  dbHost = process.env.DB_HOST;
} else {
  dbHost = "localhost";
}

// Shorthand
const dbHost = process.env.DB_HOST || "localhost";

/* Find Function */

// Longhand
const pets = [
  { type: "Dog", name: "Enoch" },
  { type: "Cat", name: "Kathleen" },
  { type: "Dog", name: "Sunil" },
];

function findDog(name) {
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === "Dog" && pets[i].name === name) {
      return pets[i];
    }
  }
}

// Shorthand
pets = pets.find((pet) => pet.type === "Dog" && pet.name === "Enoch");
console.log(pets);

/* Math.floor */

// Longhand
Math.floor(4.9) === 4;

// Shorthand
~~4.9 === 4;

/* Math.pow */

// Longhand
Math.pow(2, 3);
Math.pow(2, 2);

// Shorthand
2 ** 3;
2 ** 2;


