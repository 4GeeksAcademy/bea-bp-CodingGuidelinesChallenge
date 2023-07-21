/* Exercise 1: Naming Conventions
Given the following code snippet, try to refactor it using better variable and function names.*/
​
    // let a = 10;
    // let b = 20;
    // ​
    // function c(d, e) {
    //     return d + e;
    // }
    // console.log(c(a, b));

let firstNumber = 10;
let secondNumber = 20;
    
function addTwoNumbers(number1, number2) {
    return number1 + number2;
}
console.log(addTwoNumbers)     



​
/* Exercise 2: Commenting and Documentation
Review the following code snippet and add comments to make the code's purpose and functionality clearer.*/
​
  // let p = 'Hello, world!';
  // ​
  // function r(s) {
  //   let t = s.split('');
  //   let u = t.reverse();
  //   let v = u.join('');
  //   return v;
  // }
  // ​
  // console.log(r(p));
​

// Definimos una cadena de texto inicial
let originalString = 'Hello, world!';

// Definimos una función que invierte una cadena de texto
function reverseString(stringToReverse) {
  // Divide la cadena de texto en un array de caracteres
  let arrayOfCharacters = stringToReverse.split('');

  // Inviertimos el orden de los caracteres en el array
  let reversedArrayOfCharacters = arrayOfCharacters.reverse();

  // Uneimos los caracteres en el array para formar una nueva cadena de texto
  let reversedString = reversedArrayOfCharacters.join('');

  // Devolvemos la cadena de texto invertida
  return reversedString;
}

// Imprimimos la cadena de texto invertida en la consola
console.log(reverseString(originalString));





/* Exercise 3: Code Structure
This code snippet is correct, but messy. Improve its structure and readability by adding whitespace and organizing the code more logically.*/
​
  // let x=100,y=200;function add(a,b){return a+b;}console.log(add(x,y));

let x = 100;
let y = 200;

function add(a, b) {
    return a + b;
}
console.log(add(x, y));



​
/* Exercise 4: Use of Constants
Review the following code and replace the magic numbers with named constants to make it more readable and understandable.*/
​
  // function calculateCircleArea(radius) {
  //     return 3.14 * radius * radius;
  // }
  // ​
  // console.log(calculateCircleArea(10));
  // ​

let PI = 3.14;

function calculateCircleArea(radius) {
    // Utiliza la constante PI en lugar del número mágico 3.14
    return PI * radius * radius;
}

console.log(calculateCircleArea(10));




/* Exercise 5: Avoiding Global Variables
The following code uses a global variable. Refactor it to avoid using global variables, making use of function parameters or return values instead.*/
​
  // let greeting = "Hello, world!";
  // ​
  // function sayHello() {
  //   console.log(greeting);
  // }
  // ​
  // sayHello();

function sayHello(greeting) {
  console.log(greeting);
}

sayHello("Hello, world!");


​
/* Exercise 6: Use of let vs const
In the following code snippet, determine where you can use const instead of let, and refactor the code accordingly. Remember, it's a best practice to always use const for variables that won't be reassigned.*/
​
  // let x = 10;
  // let y = 20;
  // let sum = x + y;
  // console.log(sum);
​
const x = 10;
const y = 20;
const sum = x + y;
console.log(sum);




/* Exercise 7: Avoiding the == Operator
This code snippet uses the == operator. Refactor it to use === instead, because === is more predictable as it also checks the type of the variables.*/
​
  // let x = "10";
  // if (x == 10) {
  //   console.log('x is 10');
  // } else {
  //   console.log('x is not 10');
  // }
​
let x = "10";
if (x === "10") { 
  console.log('x is 10');
} else {
  console.log('x is not 10');
}



/* Exercise 8: DRY Principle
This code violates the DRY (Don't Repeat Yourself) principle. Refactor it to avoid repetition.*/
​
    // function calculateAreaSquare(side) {
    //     return side * side;
    //   }
    
    //   function calculateAreaRectangle(length, width) {
    //     return length * width;
    //   }
    
    //   function calculateAreaTriangle(base, height) {
    //     return 0.5 * base * height;
    //   }


  function calculateArea(geometricalFigure, baseOrSide, heightOrWidth) {
        if(geometricalFigure === "Square" || geometricalFigure === "Rectangle"){
            return baseOrSide * heightOrWidth;
        }
        return 0.5 * baseOrSide * heightOrWidth;
    }


​
/* Exercise 9: Use of Arrow Functions
Refactor this code to use arrow functions, which provide a more concise syntax for function definition.*/
​
  // function multiply(a, b) {
  //     return a * b;
  //   }
    
  //   let numbers = [1, 2, 3, 4, 5];
  //   numbers = numbers.map(function(number) {
  //     return multiply(number, 2);
  //   });
    
  //   console.log(numbers);


  const multiply = (a, b) => a * b;
  
  let numbers = [1, 2, 3, 4, 5];
  numbers = numbers.map(number => multiply(number, 2));
    
  console.log(numbers);
  


​
/* Exercise 10: Naming Conventions
Rename the variable name so they make sense and describe what they're actually doing. */
​
    // function my_snake_case_function_is_so_FREAKING_COOL_but_I_likeCamelCaseBetter(parrot, brick) {
    //     if(brick !== 0){
    //         return parrot / brick;
    //     }
    //     return "Division by 0!";
    // }

function divideByPreventingDivisionByZero(firstNumber, secondNumber) {
    if(secondNumber !== 0){
        return firstNumber / secondNumber;
    }
    return "Division by 0!";
}


​
/* Exercise 11: DRY
These functions perform very similar tasks. Refactor them into a single, more flexible function that maintains the same functionality. */
​
    // function greetMorning(name) {
    //     return `Good morning, ${name}!`;
    //   }
    
    //   function greetAfternoon(name) {
    //     return `Good afternoon, ${name}!`;
    //   }
    
    //   function greetEvening(name) {
    //     return `Good evening, ${name}!`;
    //   }


    function greet(partOfTheDay, name) {
        return `Good ${partOfTheDay}, ${name}`;
    }
    
​
  
/* Exercise 12: DRY
This code has repetitive conditional checks. Refactor it to avoid the repetition.   */
​
    // if(day === "Monday") {
    //     console.log("Start of the work week.");
    //   } else if(day === "Tuesday") {
    //     console.log("Second day of the work week.");
    //   } else if(day === "Wednesday") {
    //     console.log("Mid-week.");
    //   } else if(day === "Thursday") {
    //     console.log("Almost the weekend.");
    //   } else if(day === "Friday") {
    //     console.log("Last day of the work week.");
    //   } else if(day === "Saturday") {
    //     console.log("Weekend, time to relax.");
    //   } else if(day === "Sunday") {
    //     console.log("Weekend, time to prepare for the upcoming week.");
    //   }
​

function checkDayOfTheWeek(day){
    switch (day) {
        case "Monday":
            console.log("Start of the work week.");
            break;
        case "Tuesday":
            console.log("Second day of the work week.");
            break;
        case "Wednesday":
            console.log("Mid-week.");
            break; 
        case "Thursday":
            console.log("Almost the weekend.");
            break; 
        case "Friday":
            console.log("Last day of the work week.");
            break; 
        case "Saturday":
            console.log("Weekend, time to relax.");
            break; 
        case "Sunday":
            console.log("Weekend, time to prepare for the upcoming week.");
            break; 
    }
}




/* Exercise 13: DRY
The following code loops over the same array twice. Can you refactor it to achieve the same results but only loop over the array once? */
​
    // let numbers = [1, 2, 3, 4, 5];
    // ​
    // let sum = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //   sum += numbers[i];
    // }
    // console.log(sum);
    // ​
    // for (let i = 0; i < numbers.length; i++) {
    //   if (numbers[i] % 2 === 0) {
    //     console.log(numbers[i]);
    //   }
    // }



const numbers = [1, 2, 3, 4, 5];
​
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];

    if (numbers[i] % 2 === 0) {
      console.log(numbers[i])
    }
}

console.log(sum);




​
/* Exercise 14: DRY
There are multiple code blocks in the function that do the same thing. Refactor the function to eliminate this duplication. */
​
    // function processArray(arr) {
    //     if (arr.length > 10) {
    //       let sum = 0;
    //       for (let i = 0; i < arr.length; i++) {
    //         sum += arr[i];
    //       }
    //       return sum;
    //     } else {
    //       let sum = 0;
    //       for (let i = 0; i < arr.length; i++) {
    //         sum += arr[i];
    //       }
    //       return sum * 2;
    //     }
    //   }


  function processArray(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
        if (arr.length > 10) {
        return sum;
        } 
        return sum * 2;
    }
  



​
/*  Exercise 15: DRY isn't only about code logic.
In general, the DRY principle is about more than just reducing the amount of code. It's also about making your code more efficient and easier to understand.
​
This object has several properties that hold very similar data but share something repetitive in their naming. How can you refactor this object to be more DRY?
*/
​
    // let menu = {
    //     burgerPrice: 10,
    //     friesPrice: 5,
    //     shakePrice: 3,
    //     sodaPrice: 2,
    //     saladPrice: 7
    //   };

  let menuPrices = {
    burger: 10,
    fries: 5,
    shake: 3,
    soda: 2,
    salad: 7
  };