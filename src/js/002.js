// 1. Write a function that takes an object as input, the input object is an ice cream van(ice cream shop) the shop have different flavours:
var iceCreamVan = {
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
    ]
};
//-create a object to return the one day collections(billing, stock left...) of the ice cream shop
var example = [
    {
        id: "1",
        date: "Fri Jun 14 2024 ",
        details: [
            { name: "vanilla", totalCash: 0, stockLeft: 0 },
            { name: "chocolate", totalCash: 0, stockLeft: 0 },
            { name: "mixedFruit", totalCash: 0, stockLeft: 0 },
            { name: "arabicCoconut", totalCash: 0, stockLeft: 0 },
        ],
        totalCash: 0
    },
];
var time = new Date();
// const ShuffleTeams = (arr: string[]): Match[] => {
// return
// }
// 3. Write a function to find most occurrence number in a array
// const MostOccurrenceElement = (arr: string[]):number => {
// return
// }
// 4. Write a function to check two object are true or false
var cartOne = {
    name: "cars",
    count: 2,
    price: 500000
};
var cartTwo = {
    name: "cars",
    count: 2,
    price: 500000
};
var objectAreTrue = function (objOne, objTwo) {
    if (JSON.stringify(objOne) === JSON.stringify(objTwo)) {
        return true;
    }
    else {
        return false;
    }
};
var electricityBill = [
    {
        ward: 1,
        houseOwnerName: "Sasuke",
        billDueDate: "Thur Jun 13 2024",
        billFee: 320
    },
    {
        ward: 1,
        houseOwnerName: "Naruto",
        billDueDate: "Thur Jun 12 2024",
        billFee: 1220
    },
    {
        ward: 1,
        houseOwnerName: "Tsunade",
        billDueDate: "Fri Jun 20 2024",
        billFee: 320
    },
];
var BillDue = function (arr) {
    var currentDate = new Date();
    var newObj = {};
    arr.forEach(function (item) {
        var billDueDate = new Date(item.billDueDate);
        if (billDueDate <= currentDate) {
            newObj = {
                ward: item.ward,
                houseOwnerName: item.houseOwnerName,
                billDueDate: item.billDueDate,
                billFee: item.billFee
            };
        }
    });
    return newObj;
};
// console.log(BillDue(electricityBill));
// 8. Write a function merge two array with given offset
function arrMix(offSet) {
    var result = [];
    var arrayOne = [1, 2, 3, 4, 5];
    var arrayTwo = [6, 7, 8, 9, 10, 11, 12];
    var i = 0;
    var j = 0;
    while (i < arrayOne.length) {
        result.push(arrayOne[i]);
        i++;
        for (var k = 0; k < offSet && j < arrayTwo.length; k++) {
            result.push(arrayTwo[j]);
            j++;
        }
    }
    return result;
}
console.log(arrMix(2));
