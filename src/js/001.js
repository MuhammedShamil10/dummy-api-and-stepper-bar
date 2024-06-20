"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.aggregateOrders = exports.groupByProperty = exports.characters = exports.calculateProductPrice = exports.mergeSortedArrays = exports.sortByName = exports.filterByAge = exports.removeDuplicates = exports.countVowels = exports.getLargestNumber = exports.getSum = exports.getSumOfNumbers = void 0;
// -----------------------------------------------
// Sum of an Array: Write a function that takes an array of numbers as input and returns the sum of all elements.
var getSumOfNumbers = function (arr) {
    // ...
    var sum = 0;
    arr.map(function (number) { return (sum += number); });
    return sum;
};
exports.getSumOfNumbers = getSumOfNumbers;
console.log((0, exports.getSumOfNumbers)([1, 2, 3, 4, 5, 20]));
// -----------------------------------------------
// Write a function to get the sum of numbers in the given array. The array elements can be of any export type. Only sum the numbers.
var getSum = function (arr) {
    // ...
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
        }
    }
    return sum;
};
exports.getSum = getSum;
// console.log(getSum([1, "a", 2, 4, 2, true]));
// -----------------------------------------------
// Write a function that takes an array of numbers as input and returns the largest number.
var getLargestNumber = function (arr) {
    // ...
    var largestNumber = Math.max.apply(Math, arr);
    return largestNumber;
};
exports.getLargestNumber = getLargestNumber;
// console.log(getLargestNumber([1,2,3,9,3,-100,100,10]));
// -----------------------------------------------
// Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) present in the string (case-insensitive).
var countVowels = function (str) {
    // ...
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u") {
            count++;
        }
    }
    return count;
};
exports.countVowels = countVowels;
// console.log(countVowels('sasukeuchiha'));
// -----------------------------------------------
// Write a function that takes an array of numbers as input and returns a new array with all duplicate elements removed.
var removeDuplicates = function (arr) {
    // ...
    var removedDuplicatesNumber = arr.filter(function (item, index) { return arr.indexOf(item) === index; });
    // console.log(removedDuplicatesNumber);
    return removedDuplicatesNumber;
    // return removedDuplicatesNumber
};
exports.removeDuplicates = removeDuplicates;
var filterByAge = function (arr, minAge) {
    // ...
    var filteredAge = arr.slice().filter(function (item) { return item.age >= minAge; });
    return filteredAge;
};
exports.filterByAge = filterByAge;
var sortByName = function (arr) {
    // ...
    var sortedObject = arr.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    return sortedObject;
};
exports.sortByName = sortByName;
// console.log(sortByName([{name: 'uzumaki'}, {name: 'sasuke'}, {name: 'sakura'}, {name: 'hinata'}, {name: 'akatski'}]));
// -----------------------------------------------
// Write a function that takes a string as input. Validate if the string has a valid email format (contains "@" and "."). Return true if valid, false otherwise.
// export const validateEmail = (email: string): boolean => {
//   //   // ...
// };
// console.log(validateEmail("shamil@gmail.com"));
function shuffleArray(array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
}
var teams = ["Team A", "Team B", "Team C", "Team D"];
// Shuffle the teams array
shuffleArray(teams);
var semiFinals = [
    { team1: teams[0], team2: teams[1] },
    { team1: teams[2], team2: teams[3] }
];
console.log("Semi-Final Matchups:");
semiFinals.forEach(function (match, index) {
    console.log("Match ".concat(index + 1, ": ").concat(match.team1, " vs ").concat(match.team2));
});
// -----------------------------------------------
// Write a function that takes two sorted arrays of numbers as input and returns a new array containing all elements merged and sorted in ascending order.
var mergeSortedArrays = function (arr1, arr2) {
    // ...
    // let newArr: number[] = [];
    // for(let i = 0; i < arr1.length; i++) {
    //   newArr.push(arr1[i])
    // }
    // for(let j = 0; j < arr2.length; j++) {
    //   newArr.push(arr1[j])
    // }
    // return newArr
    var mergedArray = arr1.concat(arr2);
    var sortedArray = mergedArray.sort(function (a, b) {
        return a - b;
    });
    return sortedArray;
};
exports.mergeSortedArrays = mergeSortedArrays;
var calculateProductPrice = function (arr) {
    // ...
    var totalPrice = 0;
    var priceMultipliedByQuantity = arr.map(function (price) { return price.price * price.quantity; });
    priceMultipliedByQuantity.map(function (total) { return (totalPrice += total); });
    return totalPrice;
};
exports.calculateProductPrice = calculateProductPrice;
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
exports.characters = [
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
var groupByProperty = function (arr, property) {
    // ...
    var newObj = {};
    arr.map(function (item) {
        var _a;
        var _b;
        var itemList = (_b = newObj[item[property]]) === null || _b === void 0 ? void 0 : _b.find(function (i) { return item; });
        if (itemList) {
            console.log("here");
            newObj[item[property]].push([
                {
                    name: item.name,
                    family: item.family
                },
            ]);
        }
        else {
            newObj = __assign(__assign({}, newObj), (_a = {}, _a[item[property]] = [{ name: item.name, family: item.family }], _a));
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
exports.groupByProperty = groupByProperty;
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
var item = [
    {
        customerId: 1,
        items: [
            {
                name: "Laptop",
                price: 1200
            },
            {
                name: "Mouse",
                price: 25
            },
        ],
        totalPrice: 0
    },
    {
        customerId: 1,
        items: [
            {
                name: "Laptop",
                price: 1200
            },
        ],
        totalPrice: 0
    },
    {
        customerId: 1,
        items: [
            {
                name: "Laptop",
                price: 1200
            },
        ],
        totalPrice: 0
    },
    {
        customerId: 1,
        items: [
            {
                name: "Laptop",
                price: 1200
            },
        ],
        totalPrice: 0
    },
    {
        customerId: 1,
        items: [
            {
                name: "Mouse",
                price: 1200
            },
        ],
        totalPrice: 0
    },
    {
        customerId: 1,
        items: [
            {
                name: "Laptop",
                price: 1200
            },
        ],
        totalPrice: 0
    },
    {
        customerId: 2,
        items: [
            {
                name: "Smartphone",
                price: 800
            },
        ],
        totalPrice: 0
    },
    {
        customerId: 3,
        items: [
            {
                name: "Tablet",
                price: 300
            },
            {
                name: "Keyboard",
                price: 50
            },
        ],
        totalPrice: 0
    },
];
var aggregateOrders = function (arr, customerId) {
    // ...
    var newObjet = {
        customerId: 0,
        totalAmount: 0,
        totalOrders: 0,
        mostFrequentProduct: { name: "", price: 0, quantity: 0 }
    };
    var allProductTotalPrice = 0;
    var customerTotalOrder = 0;
    var frequentlyBuyProductNames = [];
    var result = {};
    arr.forEach(function (option) {
        if (option.customerId === customerId) {
            option.items.map(function (product) { return (allProductTotalPrice += product.price); });
            customerTotalOrder += option.items.length;
            option.items.map(function (name) { return frequentlyBuyProductNames.push(name.name); });
        }
    });
    frequentlyBuyProductNames.forEach(function (element) {
        result[element] = result[element] ? result[element] + 1 : 1;
        var frequentlyPurchasedCount = Object.values(result);
        var maxQuantity = Math.max.apply(Math, frequentlyPurchasedCount);
        var frequentlyPurchasedProduct = Object.keys(result).reduce(function (a, b) {
            return result[a] > result[b] ? a : b;
        });
        var frequentlyPurchasedProductTotal = 0;
        arr.forEach(function (option) {
            option.items.forEach(function (product) {
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
                quantity: maxQuantity
            }
        };
    });
    return newObjet;
};
exports.aggregateOrders = aggregateOrders;
console.log((0, exports.aggregateOrders)(item, 1));
