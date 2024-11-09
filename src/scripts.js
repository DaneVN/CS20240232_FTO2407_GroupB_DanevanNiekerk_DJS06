import {
  logProducts,
  uppercaseProvinces,
  calcNameLength,
  sortAphabet,
  removeFilterCount,
  findChar,
  arraysToSingleObject,
} from "../exercises.js";
import {
  concatArray,
  filterByNameLength,
  findExtremePrices,
  logProductName,
  objectKeyTransformation,
  priceManipulation,
} from "../advancedExercises.js";

// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Exercises
console.log("CHALLENGE 1");
logProducts(products);
console.log("CHALLENGE 2");
uppercaseProvinces(provinces);
console.log("CHALLENGE 3");
calcNameLength(names);
console.log("CHALLENGE 4");
sortAphabet(provinces);
console.log("CHALLENGE 5");
removeFilterCount(provinces, "Cape");
console.log("CHALLENGE 6");
findChar(names, "S");
console.log("CHALLENGE 7");
arraysToSingleObject(names, provinces);

//Advanced Exercises (Single console.log Execution)

console.log("CHALLENGE(Advance) 1");
logProductName(products);
console.log("CHALLENGE(Advance) 2");
filterByNameLength(names);
console.log("CHALLENGE(Advance) 3");
priceManipulation(products);
console.log("CHALLENGE(Advance) 4");
concatArray(products);
console.log("CHALLENGE(Advance) 5");
findExtremePrices(products);
console.log("CHALLENGE(Advance) 6");
objectKeyTransformation(products);
