const l = [ 'Laptop', 'Laptop', 'Mouse', 'Mouse', 'Mouse', 'Mouse' ];

const result = {};

 l.map(element => {
    console.log(result)
    console.log('element',element)
    console.log('element in result', result[element])
    console.log('********************')
 result[element] =  result[element] ?  result[element] + 1 : 1;

});

console.log(result)

// const removeDuplicates = (arr) => {
//   let removedDuplicatesNumber = arr.filter(
//     (item, index) => arr.indexOf(item) === index
//   );
//   // console.log(removedDuplicatesNumber);

//   return removedDuplicatesNumber;
//   // return removedDuplicatesNumber
// };

// const a = { Laptop: 4, Mouse: 2 };

// // Get the values of the object
// const values = Object.values(a);

// // Find the maximum value
// const maxValue = Math.max(...values);

// console.log(maxValue); // Output: 4

// console.log(removeDuplicates([1, 2, 3, 5, 3, 1, 5]));

// item = 1, index = 0 
// arr[1] = 0 === 0 = true =>
//  item = 2, index = 1
// arr[2] = 1 === 1 = true => 
//  item = 3, index = 2
// arr[3] = 2 === 2 = true => 
//  item = 5, index = 3
// arr[5] = 3 === 3 = true => 
//  item = 3, index = 4
// arr[3] = 2 === 4  false

