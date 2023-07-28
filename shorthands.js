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

/* Joining and Cloning arrays */

// Longhand

//Joining arrays
const odd = [1, 3, 5];
const even = [2, 4, 6].concat(odd);
console.log(even);

//Cloning arrays
const arr1 = [1, 2, 3, 4];
const arr2 = arr1.slice();

// Shorthand

//Joining arrays
const odd = [1, 3, 5];
const even = [2, 4, 6, ...odd];
console.log(even);

//Cloning arrays
const arr1 = [1, 2, 3, 4];
const arr2 = [...arr1];

/* String Into A Number */

// Longhand
const num1 = parseInt("100");
const num2 = parseFloat("100.01");

// Shorthand
const num1 = +"100";
const num2 = +"100.01";

/* Destructuring Assignment */

// Longhand
const observable = require("mobx/observable");
const action = require("mobx/action");
const runInAction = require("mobx/runInAction");

const store = this.props.store;
const form = this.props.form;
const loading = this.props.loading;
const errors = this.props.errors;
const entity = this.props.entity;

// Shorthand
import { observable, action, runInAction } from "mobx";
const { store, form, loading, errors, entity } = this.props;
// You can even assign variable names
const { store, form, loading, errors, entity: contact } = this.props;

/* Template Literals */

//Longhand
const welcome = "You have logged in as " + first + " " + last + ".";
const db = "http://" + host + ":" + port + "/" + database;

// Shorthand
const welcome = `You have logged in as ${first} ${last}`;
const db = `http://${host}:${port}/${database}`;
