const nums = [24, 6, 31, 10, 8, 7, 16, 4, 13, 9];
console.log("Original array:", nums);

// - Филтрирање на дадена низа по даден параметар
const oddNums = nums.filter(num => num % 2 !== 0);
console.log("Filtered odd numbers:", oddNums);

const evenNums = nums.filter(num => num % 2 === 0);
console.log("Filtered even numbers:", evenNums);

const singleDigitNums = nums.filter(num => num < 10);
console.log("Filtered single-digit numbers:", singleDigitNums);

const twoDigitNums = nums.filter(num => num >= 10);
console.log("Filtered two-digit numbers:", twoDigitNums);

// - Сортирање на дадена низа по даден параметар
const ascNums = nums.sort((a, b) => a - b);
console.log("Numbers sorted in ascending order:", ascNums);

const descNums = nums.sort((a, b) => b - a);
console.log("Numbers sorted in descending order:", descNums);

// - Сумирање на параметри од дадена низа
const total = nums.reduce((acc, curr) => (acc += curr), 0);
console.log("The sum total of numerical array values:", total);

// - Пронаоѓање на член од дадена низа
const findOdd = nums.find(num => num % 2 !== 0);
console.log("The first odd number:", findOdd);

const findEven = nums.find(num => num % 2 === 0);
console.log("The first even number:", findEven);

// * Бонус: Што значи тоа, функциите се "first-class-citizens" во JavaScript?

// 1. can be assigned as values to variables

const doubledNums = function(arr) {
    return arr.map(num => num * 2);
};
console.log("Doubled numbers:", doubledNums(nums));

// 2. can be passed as arguments to other functions
// e.g. callbacks, passed to HOFs

// 3. can return other functions
const ageRangeFunc = function(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
};

const minors = ageRangeFunc(0, 18);
console.log("Is a minor?", minors(17));
console.log("Is a minor?", minors(25));

const adults = ageRangeFunc(19, 65);
console.log("Is an adult?", adults(45));
console.log("Is an adult?", adults(12));

const seniors = ageRangeFunc(66, 100);
console.log("Is a senior?", seniors(75));
console.log("Is a senior?", seniors(53));
