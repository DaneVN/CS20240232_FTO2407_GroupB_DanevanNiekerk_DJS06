import {
  logNamesAndProvinces,
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
console.log("");
console.log("CHALLENGE 1");
logNamesAndProvinces(names, provinces);
console.log("");
console.log("CHALLENGE 2");
uppercaseProvinces(provinces);
console.log("");
console.log("CHALLENGE 3");
calcNameLength(names);
console.log("");
console.log("CHALLENGE 4");
sortAphabet(provinces);
console.log("");
console.log("CHALLENGE 5");
removeFilterCount(provinces, "Cape");
console.log("");
console.log("CHALLENGE 6");
findChar(names, "S");
console.log("");
console.log("CHALLENGE 7");
arraysToSingleObject(names, provinces);

//Advanced Exercises (Single console.log Execution)

console.log("");
console.log("CHALLENGE(Advanced) 1");
logProductName(products);
console.log("");
console.log("CHALLENGE(Advanced) 2");
filterByNameLength(names);
console.log("");
console.log("CHALLENGE(Advanced) 3");
priceManipulation(products);
console.log("");
console.log("CHALLENGE(Advanced) 4");
concatArray(products);
console.log("");
console.log("CHALLENGE(Advanced) 5");
findExtremePrices(products);
console.log("");
console.log("CHALLENGE(Advanced) 6");
objectKeyTransformation(products);
