// ========= Advanced Exercises (Single console.log Execution) ===========
import { logProducts } from "./exercises.js";
//Log Products:
export const logProductName = (array) => logProducts(array);

//Filter by Name Length:
export const filterByNameLength = (namesArray) => {
  console.log(namesArray.filter((name) => name.length < 6));
};

//Price Manipulation:
export const priceManipulation = (productsArray) => {
  console.log(
    productsArray
      .filter((product) => product.price && product.price !== " ")
      .map((item) =>
        typeof item.price === "string" ? Number(item.price) : item.price
      )
      .reduce((acc, curr) => acc + curr, 0)
  );
};

//Concatenate Product Names:
export const concatArray = (array) => {
  console.log(array.reduce((acc, curr) => acc + curr.product + ", ", ""));
};

//Find Extremes in Prices: logic is
const getExtreme = (products) => {
  return products
    .filter((product) =>
      typeof product.price === "string"
        ? product.price.trim() !== ""
        : product.price !== undefined
    )
    .map((product) => ({
      ...product,
      price:
        typeof product.price === "string"
          ? Number(product.price)
          : product.price,
    }))
    .reduce(
      (acc, product) => {
        if (product.price > acc.highest.price) acc.highest = product;
        if (product.price < acc.lowest.price) acc.lowest = product;
        return acc;
      },
      { highest: { price: -Infinity }, lowest: { price: Infinity } }
    );
};

export const findExtremePrices = (products) => {
  console.log(
    `Highest: ${getExtreme(products).highest.product} at ${
      getExtreme(products).highest.price
    }. Lowest: ${getExtreme(products).lowest.product} at ${
      getExtreme(products).lowest.price
    }.`
  );
};

//Object Transformation:
export const objectKeyTransformation = (products) => {
  console.log(
    Object.entries(products).reduce((acc, curr) => {
      acc.push({
        name: curr[0],
        cost: curr[1].price,
      });
      return acc;
    }, [])
  );
};
