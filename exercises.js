// ========= Exercises ===========
//Log Products:
export const logProducts = (productsArray) => {
  productsArray.forEach((singleProduct) => console.log(singleProduct.product));
};

//Uppercase Transformation:
export const uppercaseProvinces = (provincesArray) => {
  const newProvinces = provincesArray.map((item) => {
    return item.toUpperCase();
  });
  newProvinces.forEach((province) => {
    console.log(province);
  });
};

//Name Lengths:
export const calcNameLength = (namesArray) => {
  console.log(namesArray.map((name) => name.length));
};

//Sorting:
export const sortAphabet = (provincesArray) => {
  const newArray = [];
  //this is done to ensure OG array stays immutable
  provincesArray.forEach((item) => newArray.push(item));
  console.log(newArray.sort());
};

//Filtering Cape:
export const removeFilterCount = (array, filter) => {
  console.log(
    array.filter((item) => {
      return !item.includes(filter);
    }).length
  );
};

//Finding 'S':
export const findChar = (array, char) => {
  const handler = (item) =>
    item.split("").some((letter) => letter === char.toString());
  console.log(array.map(handler));
};

//Creating Object Mapping:
export const arraysToSingleObject = (array1, array2) => {
  const handler = (accumulated, current, index) => {
    accumulated.push({ name: current, province: array2[index] });
    return accumulated;
  };
  console.log(array1.reduce(handler, []));
};
