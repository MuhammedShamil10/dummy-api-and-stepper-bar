// 1. Write a function that takes an object as input, the input object is an ice cream van(ice cream shop) the shop have different flavours:
const iceCreamVan = {
  flavours: [
    { name: "vanilla", price: 60, stock: 4 },
    { name: "chocolate", price: 60, stock: 2 },
    { name: "mixedFruit", price: 90, stock: 3 },
    { name: "arabicCoconut", price: 120, stock: 1 },
  ],
  storage: [
    { name: "vanilla", stock: 2 },
    { name: "chocolate", stock: 2 },
    { name: "mixedFruit", stock: 2 },
    { name: "arabicCoconut", stock: 0 },
  ],
};
//-create a object to return the one day collections(billing, stock left...) of the ice cream shop
const example = [
  {
    id: "1",
    date: "Fri Jun 14 2024 ",
    details: [
      { name: "vanilla", totalCash: 0, stockLeft: 0 },
      { name: "chocolate", totalCash: 0, stockLeft: 0 },
      { name: "mixedFruit", totalCash: 0, stockLeft: 0 },
      { name: "arabicCoconut", totalCash: 0, stockLeft: 0 },
    ],
    totalCash: 0,
  },
];
const time = new Date();
// Calculate the total cash obtained from all the ice cream sales
// Calculate each flavour ice creams total cash obtained
// Calculate how many stocks left in each flavours, if flavours stocks out of stock then refill with storage stock if there is no stock in storage write a sentence to inform out of stock
//Find which ice cream sales more

type IceCreamVan = {
  flavours: {
    name: string;
    price: number;
    stock: number;
  }[];
  storage: {
    name: string;
    stock: number;
  }[];
};

type DataCollection = {
  id: string;
  date: Date;
  details: [
    {
      name: string;
      totalCash: number;
      stockLeft: number;
    }
  ];
  totalCash: number;
};

// const CollectionOfIceCreamData = (arr: IceCreamVan): DataCollection => {
//   return;
// };

// 2. Write a function to set football teams for the semi-finals for semi-finals we have 4 team(portugal , uruguay, brazil, france) make a random shuffle for which team is plays against to another team
type Match = {
  team1: string;
  team2: string;
};
// const ShuffleTeams = (arr: string[]): Match[] => {
// return
// }

// 3. Write a function to find most occurrence number in a array

// const MostOccurrenceElement = (arr: string[]):number => {
// return
// }

// 4. Write a function to check two object are true or false
let cartOne = {
  name: "cars",
  count: 2,
  price: 500000,
};

let cartTwo = {
  name: "cars",
  count: 2,
  price: 500000,
};

const objectAreTrue = (
  objOne: { name: string; count: number; price: number },
  objTwo: { name: string; count: number; price: number }
): boolean => {
  if (JSON.stringify(objOne) === JSON.stringify(objTwo)) {
    return true;
  } else {
    return false;
  }
};
// console.log(objectAreTrue(cartOne, cartTwo));

// 5. Write a function take a string as input with Lowercase case and return the first alphabet with upper case
// shamil -> Shamil
// const FirstLetterUpperCase = (str: string):string => {
//     return
// }

// 6. Write a function for make the sentences words first letter to Upper case
//hi my name is eren yeagher -> Hi My Name Is Eren Yeagher
// const SentenceFirstWordsToUpperCase = () => {
//     return
// }

// 7. Write a function that takes an array of objects each object have house owner name, ward number, bill due date, bill fee to check if the object given value. return a new object for which house owner didn't pay the bill in the given bill due date.

type ElectricityBill = {
  ward: number;
  houseOwnerName: string;
  billDueDate: string;
  billFee: number;
}[];

const electricityBill = [
  {
    ward: 1,
    houseOwnerName: "Sasuke",
    billDueDate: "Thur Jun 13 2024",
    billFee: 320,
  },
  {
    ward: 1,
    houseOwnerName: "Naruto",
    billDueDate: "Thur Jun 12 2024",
    billFee: 1220,
  },
  {
    ward: 1,
    houseOwnerName: "Tsunade",
    billDueDate: "Fri Jun 20 2024",
    billFee: 320,
  },
];

const BillDue = (arr: ElectricityBill) => {
  const currentDate = new Date();
  let newObj = {};

  arr.forEach((item) => {
    let billDueDate = new Date(item.billDueDate);
    if (billDueDate <= currentDate) {
      newObj = {
        ward: item.ward,
        houseOwnerName: item.houseOwnerName,
        billDueDate: item.billDueDate,
        billFee: item.billFee,
      };
    }
  });
  return newObj;
};
// console.log(BillDue(electricityBill));

// 8. Write a function merge two array with given offset

function arrMix(offSet: number) {
  let result = [];

  const arrayOne = [1, 2, 3, 4, 5];
  const arrayTwo = [6, 7, 8, 9, 10, 11, 12];

  let i = 0;
  let j = 0;
  while (i < arrayOne.length) {
    result.push(arrayOne[i]);
    i++;
    for (let k = 0; k < offSet && j < arrayTwo.length; k++) {
      result.push(arrayTwo[j]);
      j++;
    }
  }
  return result;
}
console.log(arrMix(2));
