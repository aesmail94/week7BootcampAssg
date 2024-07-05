console.log( "Question 1" )

let ages =[3, 9, 23, 64, 2, 8, 28, 93];

// Programmatically find the last element index and subtract the first element

var lastIndex = ages.length - 1;
var result = ages[lastIndex] - ages[0];

console.log("Result of subtraction: ", result);

//Add new age
var newAge = 45;
ages.push (newAge);

//Recalculate the result with the new age
var resultWithNewAge = ages[lastIndex + 1] - ages[0];
console.log("Result of subtraction with new age:", resultWithNewAge);

// Calculate the average agusing loop

var totalAge = 0;
for (var i = 0; i < ages.length; i++){
    totalAge += ages[i];
}
var averageAge = totalAge / ages.length;
console.log("Average age:", averageAge);


console.log("Question 2")
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//loop to iterate through the Array and calculate the average age
var totalLetters = 0;
for (var i = 0; i < names.length; i++){
    totalLetters += names[i].length;
}
var averageLetters = totalLetters / names.length;
console.log("Average number of letters:", averageLetters);

//loop to concatenate all names of the array
var concatenatedNames = ' ';
for(i=0; i< names.length; i++){
    concatenatedNames += names[i];
    if(i < names.length - 1){
        concatenatedNames += ' ';

    }
}
console.log(concatenatedNames);

console.log("Question 3: How do you access the last element of any array?")
console.log("To access the last element of any array, you must use array indexing with the length and subtract it by 1. The index of the last element in an array has an index of 'length - 1', or array.length - 1.");  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("Question 4: How do you access the first element of any array?")
console.log("Since arrays are zero indexed, the first element of an array is always index 0. For example the first element of an array name 'array' would be array[0].")
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("Question 5")
let nameLengths = [];

//loop to add the length of each name to the nameLengths array
for (var i=0; i < names.length; i++){
    nameLengths.push(names[i].length);
}
console.log("nameLengths array", nameLengths);


console.log("Question 6")
//for loop to calculate the sum of all the elements of nameLengths array
sumOfLengths = 0;
for( var i = 0; i < nameLengths.length; i++){
    sumOfLengths += nameLengths[i];
}
console.log(sumOfLengths);


console.log("Question 7")
function numberOfWords(word, n){
    let concatenated='';
    //loop to print word 'n' amount of times
    for (let i=0; i< n; i++){
        concatenated += word;
    }
     return concatenated;
}
//example given in the prompt
console.log(numberOfWords('Hello', 3));// "HelloHelloHello"

console.log("Question 8")
function fullName(firstName, lastName){
    return firstName+' ' +lastName;S
}
     let firstName = "John";
    let lastName = "Doe";

console.log(fullName(firstName, lastName));

console.log("Question 9");
function isSumGreaterThan100(numbers) {
    let sum = 0;
    // Calculate the sum of all numbers in the array
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    // Check if the sum is greater than 100
    if (sum > 100) {
        console.log("true");
    } else {
        console.log("false");
    }
}
// Example usage:
let numbers1 = [30, 40, 50]; // Sum is 120
isSumGreaterThan100(numbers1); // Output: true
let numbers2 = [10, 20, 30]; // Sum is 60
isSumGreaterThan100(numbers2); // Output: false

console.log("Question 10");
function avgOfNumbers(numsArray){
    let sum = 0;
    for (let i = 0; i < numsArray.length; i++){
        sum += numsArray[i];
}
    return sum / numsArray.length;
}
let numsArray = [5, 10, 15, 20, 25];
let average = avgOfNumbers(numsArray);
console.log(avgOfNumbers(numsArray));

console.log("Question 11");
function compareAverage(arr1, arr2) {
    // Calculate average of arr1
    const avg1 = arr1.reduce((acc, curr) => acc + curr, 0) / arr1.length;
    
    // Calculate average of arr2
    const avg2 = arr2.reduce((acc, curr) => acc + curr, 0) / arr2.length;
    
    // Compare averages and return result
    return avg1 > avg2;
}

// Example usage:
const arr1 = [10, 20, 30]; // Average is (10+20+30)/3 = 20
const arr2 = [5, 15, 25];  // Average is (5+15+25)/3 = 15

console.log(compareAverage(arr1, arr2)); // Output: true, because 20 > 15

console.log("Question 12")
function willBuyDrink(isHotOutside, moneyInPocket) {
    // Check if it is hot outside and moneyInPocket is greater than 10.50
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
console.log(willBuyDrink(true, 15)); // Output: true, because it is hot outside and moneyInPocket > 10.50
console.log(willBuyDrink(true, 8));  // Output: false, because it is hot outside but moneyInPocket <= 10.50
console.log(willBuyDrink(false, 15)); // Output: false, because it is not hot outside
console.log(willBuyDrink(false, 5));  // Output: false, because it is not hot outside

console.log("Question 13") //example function
function isObese(weightInPounds) {
    const obesityThresholdPounds = 220; // Example threshold in pounds

    if (weightInPounds >= obesityThresholdPounds) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
const personWeightInPounds = 250; // Person's weight in pounds
const obese = isObese(personWeightInPounds);

if (obese) {
    console.log('The person is obese.');
} else {
    console.log('The person is not obese.');
}
/*This function was created to determine if a person is obese based on their
weight. I created this function because i know obesity is a nationwide issue 
and can be used to inform people what the threshold for obesity is*/