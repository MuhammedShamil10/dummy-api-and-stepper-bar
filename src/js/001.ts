// -----------------------------------------------
// Sum of an Array: Write a function that takes an array of numbers as input and returns the sum of all elements.
export const getSumOfNumbers = (arr: number[]): number => {
  // ...
  let sum = 0;
  arr.map((number) => (sum += number));
  return sum;
};
console.log(getSumOfNumbers([1, 2, 3, 4, 5, 20]));

// -----------------------------------------------
// Write a function to get the sum of numbers in the given array. The array elements can be of any export type. Only sum the numbers.
export const getSum = (arr: any[]): number => {
  // ...
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }

  return sum;
};
// console.log(getSum([1, "a", 2, 4, 2, true]));

// -----------------------------------------------
// Write a function that takes an array of numbers as input and returns the largest number.
export const getLargestNumber = (arr: number[]): number => {
  // ...
  let largestNumber = Math.max(...arr);
  return largestNumber;
};
// console.log(getLargestNumber([1,2,3,9,3,-100,100,10]));

// -----------------------------------------------
// Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) present in the string (case-insensitive).
export const countVowels = (str: string): number => {
  // ...
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
};
// console.log(countVowels('sasukeuchiha'));

// -----------------------------------------------
// Write a function that takes an array of numbers as input and returns a new array with all duplicate elements removed.
export const removeDuplicates = (arr: number[]): number[] => {
  // ...
  let removedDuplicatesNumber = arr.filter(
    (item, index) => arr.indexOf(item) === index
  );
  // console.log(removedDuplicatesNumber);

  return removedDuplicatesNumber;
  // return removedDuplicatesNumber
};
// console.log(removeDuplicates([1, 2, 3, 5, 3, 1, 5]));

// -----------------------------------------------
// Write a function that takes an array of objects (each object has a property "age") and a minimum age as input. Return a new array containing only objects with an age greater than or equal to the minimum age.
export type TFilterByAgeArg = {
  age: number;
};

export const filterByAge = <T extends TFilterByAgeArg>(
  arr: T[],
  minAge: number
): T[] => {
  // ...
  let filteredAge = arr.slice().filter((item) => item.age >= minAge);
  return filteredAge;
};
// console.log(filterByAge([{age: 13},{age: 14}, {age: 15},{age: 37}], 14));

// -----------------------------------------------
// Write a function that takes an array of objects (each object has a property "name") as input. Return a new array containing the objects sorted alphabetically by name.
// (Hint: Use array sorting methods)
export type TSortByNameArg = {
  name: string;
};

export const sortByName = <T extends TSortByNameArg>(arr: T[]): T[] => {
  // ...
  let sortedObject = arr.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return sortedObject;
};
// console.log(sortByName([{name: 'uzumaki'}, {name: 'sasuke'}, {name: 'sakura'}, {name: 'hinata'}, {name: 'akatski'}]));

// -----------------------------------------------
// Write a function that takes a string as input. Validate if the string has a valid email format (contains "@" and "."). Return true if valid, false otherwise.
// export const validateEmail = (email: string): boolean => {
//   //   // ...
// };
// console.log(validateEmail("shamil@gmail.com"));

// -----------------------------------------------
// Write a function that takes two sorted arrays of numbers as input and returns a new array containing all elements merged and sorted in ascending order.
export const mergeSortedArrays = (arr1: number[], arr2: number[]): number[] => {
  // ...
  // let newArr: number[] = [];
  // for(let i = 0; i < arr1.length; i++) {
  //   newArr.push(arr1[i])
  // }
  // for(let j = 0; j < arr2.length; j++) {
  //   newArr.push(arr1[j])
  // }
  // return newArr

  let mergedArray = arr1.concat(arr2);
  let sortedArray = mergedArray.sort((a, b) => {
    return a - b;
  });

  return sortedArray;
};
// console.log(mergeSortedArrays([2, 3, 1, 4, 5, 2, 5], [44, 22, 55, 1, 34, 6]));

// -----------------------------------------------
// Write a function that takes an array of objects (each object represents a product with properties "price" and "quantity") as input. Return the total price of all products (price * quantity).
export type TCalculateProductPriceArg = {
  price: number;
  quantity: number;
};

export const calculateProductPrice = <T extends TCalculateProductPriceArg>(
  arr: T[]
): number => {
  // ...
  let totalPrice = 0;
  let priceMultipliedByQuantity = arr.map(
    (price) => price.price * price.quantity
  );
  priceMultipliedByQuantity.map((total) => (totalPrice += total));
  return totalPrice;
};
// console.log(
//   calculateProductPrice([
//     { price: 10, quantity: 2 },
//     { price: 15, quantity: 3 },
//     { price: 20, quantity: 2 },
//   ])
// );

// -----------------------------------------------
// Write a function that takes an array of objects (of any export type) as input. Return a new object where keys are unique values of the "property" and values are arrays of objects belonging to that property.
// Example:

export const characters = [
  { name: "Daenerys Targaryen", family: "Targaryen" },
  { name: "Jon Snow", family: "Stark" },
  { name: "Tyrion Lannister", family: "Lannister" },
  { name: "Sansa Stark", family: "Stark" },
  { name: "Arya Stark", family: "Stark" },
  { name: "Cersei Lannister", family: "Lannister" },
  { name: "Jaime Lannister", family: "Lannister" },
  { name: "Theon Greyjoy", family: "Greyjoy" },
  { name: "Margaery Tyrell", family: "Tyrell" },
  { name: "Petyr Baelish", family: "Baelish" },
  { name: "Jorah Mormont", family: "Mormont" },
  { name: "Brienne of Tarth", family: "Tarth" },
  { name: "Davos Seaworth", family: "Seaworth" },
  { name: "Varys", family: "unknown" },
  { name: "Melisandre", family: "unknown" },
  { name: "Ramsay Bolton", family: "Bolton" },
  { name: "Littlefinger", family: "Baelish" },
  { name: "Hodor", family: "unknown" },
  { name: "Bran Stark", family: "Stark" },
  { name: "Ygritte", family: "Wildling" },
];

// export const groupedResult = groupByProperty(characters, 'family') // where 'family' is the name of the "property" using which you like to group the data

// Now, if you log groupedResult, it should print the below: (note: the order of keys is not important)

// {
//   'Targaryen': [{'name': 'Daenerys Targaryen', 'family': 'Targaryen'}],
//   'Stark': [{'name': 'Jon Snow', 'family': 'Stark'}, {'name': 'Sansa Stark', 'family': 'Stark'}, {'name': 'Arya Stark', 'family': 'Stark'}, {'name': 'Bran Stark', 'family': 'Stark'}],
//   'Lannister': [{'name': 'Tyrion Lannister', 'family': 'Lannister'}, {'name': 'Cersei Lannister', 'family': 'Lannister'}, {'name': 'Jaime Lannister', 'family': 'Lannister'}],
//   'Greyjoy': [{'name': 'Theon Greyjoy', 'family': 'Greyjoy'}],
//   'Tyrell': [{'name': 'Margaery Tyrell', 'family': 'Tyrell'}],
//   'Baelish': [{'name': 'Petyr Baelish', 'family': 'Baelish'}, {'name': 'Littlefinger', 'family': 'Baelish'}],
//   'Mormont': [{'name': 'Jorah Mormont', 'family': 'Mormont'}],
//   'Tarth': [{'name': 'Brienne of Tarth', 'family': 'Tarth'}],
//   'Seaworth': [{'name': 'Davos Seaworth', 'family': 'Seaworth'}],
//   'unknown': [{'name': 'Varys', 'family': 'unknown'}, {'name': 'Melisandre', 'family': 'unknown'}, {'name': 'Hodor', 'family': 'unknown'}],
//   'Bolton': [{'name': 'Ramsay Bolton', 'family': 'Bolton'}],
//   'Wildling': [{'name': 'Ygritte', 'family': 'Wildling'}]
// }

export const groupByProperty = (
  arr: any[],
  property: string
): Record<string, any[]> => {
  // ...
  let newObj: Record<string, any[]> = {};

  arr.map((item) => {
    let itemList = newObj[item[property]]?.find((i) => item);
    if (itemList) {
      console.log("here");

      newObj[item[property]].push([
        {
          name: item.name,
          family: item.family,
        },
      ]);
    } else {
      newObj = {
        ...newObj,
        [item[property]]: [{ name: item.name, family: item.family }],
      };
    }
  });

  //  arr.map((option) => {
  //   console.log("starting", option)
  //   console.log(newObj[option[property]])
  //   // let itemList = newObj[option[property]]?.find((i) =>  );
  //     newObj = {
  //       ...newObj,
  //       [option[property]]: [{name: option.name, family: option.family}],
  //     }
  // });
  return newObj;
};
// console.log(JSON.stringify(groupByProperty(characters, "family")));

// -----------------------------------------------
// Write a function to aggregate order data for reporting:
// You have a JSON array representing customer orders. Each order object has properties like "customerId" "items" (array of product objects), and "totalPrice."
// Write a function that takes the JSON array and a specific customer ID as input.
// Return a new object containing:
// - The customer ID
// - Total number of orders placed by the customer
// - Total amount spent by the customer (across all orders)
// - Most frequently purchased product (by quantity) and its total quantity

const item = [
  {
    customerId: 1,
    items: [
      {
        name: "Laptop",
        price: 1200,
      },
      {
        name: "Mouse",
        price: 25,
      },
    ],
    totalPrice: 0,
  },
  {
    customerId: 1,
    items: [
      {
        name: "Laptop",
        price: 1200,
      },
    ],
    totalPrice: 0,
  },
  {
    customerId: 1,
    items: [
      {
        name: "Laptop",
        price: 1200,
      },
    ],
    totalPrice: 0,
  },
  {
    customerId: 1,
    items: [
      {
        name: "Laptop",
        price: 1200,
      },
    ],
    totalPrice: 0,
  },
  {
    customerId: 1,
    items: [
      {
        name: "Mouse",
        price: 1200,
      },
    ],
    totalPrice: 0,
  },
  {
    customerId: 1,
    items: [
      {
        name: "Laptop",
        price: 1200,
      },
    ],
    totalPrice: 0,
  },
  {
    customerId: 2,
    items: [
      {
        name: "Smartphone",
        price: 800,
      },
    ],
    totalPrice: 0,
  },
  {
    customerId: 3,
    items: [
      {
        name: "Tablet",
        price: 300,
      },
      {
        name: "Keyboard",
        price: 50,
      },
    ],
    totalPrice: 0,
  },
];

export type Product = {
  name: string;
  price: number;
};

export type TAggregareOrdersArg = {
  customerId: number;
  items: Product[];
  totalPrice: number;
};

export type TAggregareOrdersRes = {
  customerId: number;
  totalOrders: number;
  totalAmount: number;
  mostFrequentProduct?: Product & { quantity: number };
};

export const aggregateOrders = <T extends TAggregareOrdersArg>(
  arr: T[],
  customerId: number
): TAggregareOrdersRes | null => {
  // ...
  let newObjet: TAggregareOrdersRes | null = {
    customerId: 0,
    totalAmount: 0,
    totalOrders: 0,
    mostFrequentProduct: { name: "", price: 0, quantity: 0 },
  };

  let allProductTotalPrice = 0;
  let customerTotalOrder = 0;
  let frequentlyBuyProductNames: string[] = [];

  const result: any = {};

  arr.forEach((option) => {
    if (option.customerId === customerId) {
      option.items.map((product) => (allProductTotalPrice += product.price));
      customerTotalOrder += option.items.length;
      option.items.map((name) => frequentlyBuyProductNames.push(name.name));
    }
  });

  frequentlyBuyProductNames.forEach((element) => {
    result[element] = result[element] ? result[element] + 1 : 1;
    const frequentlyPurchasedCount: any = Object.values(result);
    const maxQuantity = Math.max(...frequentlyPurchasedCount);

    let frequentlyPurchasedProduct = Object.keys(result).reduce((a, b) =>
      result[a] > result[b] ? a : b
    );

    let frequentlyPurchasedProductTotal = 0;

    arr.forEach((option) => {
      option.items.forEach((product) => {
        if (frequentlyPurchasedProduct === product.name) {
          frequentlyPurchasedProductTotal += product.price;
        }
      });
    });

    newObjet = {
      customerId: customerId,
      totalOrders: customerTotalOrder,
      totalAmount: allProductTotalPrice,
      mostFrequentProduct: {
        name: frequentlyPurchasedProduct,
        price: frequentlyPurchasedProductTotal,
        quantity: maxQuantity,
      },
    };
  });

  return newObjet;
};

console.log(aggregateOrders(item, 1));
