// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create variable called name and set it equal to Dane.
// We check if the name variable is strictly equal to the string 'Mary'.
// If name was set to 'Mary' we would console.log 'Hi, Mary!', but 'name' is not currently 'Mary'
// so we do not execute the 'Hi, Mary!' console log.
// instead we execute the 'else' portion of the code because name is Dane and not Mary
// Therefore we console log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We initialize a variable called secret without assigning it a value.
// We make a 'code' variable and assign it the numeric value of 123.
// We check if the 'code' variable is strictly equal to 123, because 'code' is indeed 123
// we assign the string 'super' to the variable called secret and we assign a new value to 
// the 'code' variable by using the previously set value of 123 and multiplying it by two, 
// this results in the 'code' variable having a value of 246.
// We check if the value of 'code' is greater than 250, therefore we do not set 'secret''s value to 'duper'
// We then console log the variable 'secret' which is the string 'super'


//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create three variables: isStudent, set it to true, age set it to 34, and zip set it to 55407
// we check if two things are true 1: isStudent is true, it is, and 2: check if zip is greater than 80000, its not
// since both conditions were not met, we do not console log `You're a student on the West Coast!`

// Next we check one of two things are true: 1. Is isStudent set to false? no it is set to true 2. if age is less than 30. If one of those 
// were true we would execute the console log 'What are your hobbies?', neither check is correct so we continue

// We check if isStudent is true, it is! so we console log 'Welcome to Prime!'

// We do not execute the last else statement, because the previous condition was met.


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// FIX - the instructions say to set colorOne to 'blue', so it should be 
// let colorOne = 'blue'
let colorOne = 'red';

//FIX - colorTwo should be set to 'red' per instructions, so it should be
// let colorTwo = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
//FIX - an additional line is needed that includes setting colorTwo to 'purple' as well, not just ColorOne. like this:
//  colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX - the OR operator was used instead of the AND operator
// the solution should be: 
//if (temp > 39 && time >= 4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;


//FIX - this if statement produces the opposite effect. the instructions indicate using 
// greater than or equal to minAge, so we should flip the order of the variables and use the '>=' operator.
//should be: 
//if (age >= minAge) {
if(minAge <= age) {

//FIX - 'no entry' and 'enter' need to be switched.
  console.log('no entry');
} else {
  console.log('enter');
}

//Correct code for the whole conditional would be the following:
//if (age >= minAge) {
//    console.log('enter');
//} else {
//    console.log('no entry');
//}

*/

