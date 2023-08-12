///LET VAR & CONST///

///Q1//
let pi = 3.14159;
console.log(pi);

pi = 3.14;
console.log(pi);



///Q2///

function sumOfSquares(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let square = numbers[i] * numbers[i];
    sum += square;
  }

  const result = sum;

  var message = "The sum of the squares is: " + result;

  console.log(message);
  return result;
}

const numbersArray = [1, 2, 3, 4, 5];
const resultSum = sumOfSquares(numbersArray);
console.log(resultSum);



///Q3//

function printFirstLetter(stringsArray) {
  for (let i = 0; i < stringsArray.length; i++) {

    let firstLetter = stringsArray[i][0];
    console.log(firstLetter);
  }
}


const wordsArray = ["apple", "banana", "cherry", "date"];
printFirstLetter(wordsArray);

///Q4//

function generateAsterisks(n) {
  const asterisk = '*';
  let result = '';

  for (let i = 0; i < n; i++) {
    result += asterisk;
  }

  return result;
}


const numberOfAsterisks = 5;
const asterisksString = generateAsterisks(numberOfAsterisks);
console.log(asterisksString);



///Q5//


function generateGreeting(person) {
  var message = "Hello, my name is " + person.name + " and I am " + person.age + " years old.";
  return message;
}


var personInfo = { name: "John", age: 30 };
var greetingMessage = generateGreeting(personInfo);
console.log(greetingMessage);

///Q6//

function findMaxValue(numbersArray) {
  let maxVal = Math.max(...numbersArray);
  return maxVal;
}


const numbers = [10, 5, 23, 8, 17];
const maxValue = findMaxValue(numbers);
console.log(maxValue);



////TAMPLATE STRINGS///

///Q1//

function greetPerson(name, age) {
  const greeting = `Hello, ${name}! You are ${age} years old.`;
  return greeting;
}

// Test the function
const name = prompt("Enter your name: ");
const age = parseInt(prompt("Enter your age: "));
const message = greetPerson(name, age);
console.log(message);

//Q2///

function sumAndAverage(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return "The input should be a non-empty array of numbers.";
  }

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;

  return `The sum of the numbers is ${sum}, and the average is ${average.toFixed(2)}.`;
}


const numberArray = [10, 20, 30, 40, 50];
const result = sumAndAverage(numbersArray);
console.log(result);


///Q3//
function createHTMLElement(tag, text) {
  return `<${tag}>${text}</${tag}>`;
}

const tag = "p";
const text = "Hello, this is a paragraph.";

const htmlElement = createHTMLElement(tag, text);
console.log(htmlElement);




///Q4///



function getProductInfo(product) {
  const { name, price, quantity } = product;
  return `Product Name: ${name}
  Price: $${price.toFixed(2)}
  Quantity: ${quantity}`;
}


const product = {
  name: "Widget",
  price: 19.99,
  quantity: 5,
};

const productInfoString = getProductInfo(product);
console.log(productInfoString);



////Q5///

function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}


const dateObject = new Date('2023-08-06');
const formattedDate = formatDate(dateObject);
console.log(formattedDate);


////DISTRUCTING///

////Q1//
function sumArray(numbersArray) {

  const [num1, num2] = numbersArray;


  const sum = num1 + num2;

  return sum;
}


///Q2//

//   const Person = {
//     name: 'John Doe',
//     age: 30,
//     occupation: 'Software Engineer'
//   };

//   function getPersonInfo(person) {
//     return `Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation}`;
//   }

//   const personInfo = getPersonInfo(Person);
//   console.log(personInfo); // Output: "Name: John Doe, Age: 30, Occupation: Software Engineer"




///Q3//

function getPersonWithHighestScore(peopleArray) {

  const [firstPerson, ...restOfPeople] = peopleArray;

  let highestScore = firstPerson.score;
  let personWithHighestScore = firstPerson.name;


  for (const person of restOfPeople) {
    if (person.score > highestScore) {
      highestScore = person.score;
      personWithHighestScore = person.name;
    }
  }

  return personWithHighestScore;
}


////Q4///

function getPersonWithHighestScore(peopleArray) {

  const [firstPerson, ...restOfPeople] = peopleArray;

  let highestScore = firstPerson.score;
  let personWithHighestScore = firstPerson.name;

  for (const person of restOfPeople) {
    if (person.score > highestScore) {
      highestScore = person.score;
      personWithHighestScore = person.name;
    }
  }

  return personWithHighestScore;
}

const people = [
  { name: 'John', score: 85 },
  { name: 'Jane', score: 92 },
  { name: 'Michael', score: 78 },
  { name: 'Emma', score: 95 }
];

const personWithHighestScore = getPersonWithHighestScore(people);
console.log(personWithHighestScore);


///Q5///

function getInitials(personObj) {

  const { firstName = '', lastName = '', middleName = '' } = personObj;

  const initials = `${firstName.charAt(0).toUpperCase()}${middleName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;

  return initials;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  middleName: 'Smith'
};

const initials = getInitials(person);
console.log(initials);


///DEFAULT REST & SPREAD//

//Q1//
function addNumbers(num1 = 0, num2 = 0) {
  return num1 + num2;
}

// Test cases
console.log(addNumbers(5, 10));
console.log(addNumbers(7));
console.log(addNumbers());

///Q2//

function collectArguments(...args) {
  return args;
}

// Test cases
console.log(collectArguments(1, 2, 3));
console.log(collectArguments('a', 'b', 'c', 'd'));
console.log(collectArguments(true, false, true));
console.log(collectArguments(42));
console.log(collectArguments());

/////Q3////

function findMaxValue(numbers) {
  return Math.max(...numbers);
}

// Test cases
console.log(findMaxValue([1, 2, 3, 4, 5]));
console.log(findMaxValue([10, 20, 30, 15]));
console.log(findMaxValue([-1, -5, -3]));
console.log(findMaxValue([0]));
console.log(findMaxValue([]));


///Q4//

function concatenateArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

// Test cases
console.log(concatenateArrays([1, 2, 3], [4, 5, 6]));
console.log(concatenateArrays(['a', 'b'], ['c', 'd', 'e']));
console.log(concatenateArrays([true, false], [null]));
console.log(concatenateArrays([], [10, 20]));
console.log(concatenateArrays([1], []));

///Q5///


function addIdToObject(obj) {
  const id = generateUniqueId();

  return {
    ...obj,
    id,
  };
}

function generateUniqueId() {

  return Math.floor(Math.random() * 1000);
}

const inputObject = {
  name: 'John',
  age: 30,
  occupation: 'Engineer',
};

const objectWithId = addIdToObject(inputObject);
console.log(objectWithId);


////ARROW FUNCTIONS///

//Q1//

// const squares = [];
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number) => {
//   squares.push(number * number);
// });

// console.log(squares);



///Q2///

const getStringLength = (str) => {
  return str.length;
};

const inputString = "Hello, world!";
const length = getStringLength(inputString);
console.log(length);


////Q3////

const multiply = (num1, num2) => {
  return num1 * num2;
};

const Result = multiply(5, 10);
console.log(result);



///Q4///

const calculateAverage = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((total, number) => total + number, 0);
  return sum / numbers.length;
};

const NumberArray = [5, 10, 15, 20, 25];
const average = calculateAverage(numberArray);
console.log(average);


///Q5///

const greet = (name) => {
  return `Hello, ${name}! Welcome.`;
};

const userName = "Alice";
const greeting = greet(userName);
console.log(greeting);


///Q6//

const getRandomNumber = () => {
  return Math.random();
};

const randomValue = getRandomNumber();
console.log(randomValue);


////PROMISSES///


//Q1///


const calculateSquareWithDelay = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number === 'number') {
        const square = number * number;
        resolve(square);
      } else {
        reject(new Error('Input is not a valid number'));
      }
    }, 1000);
  });
};


calculateSquareWithDelay(5)
  .then(result => {
    console.log(`Square: ${result}`);
  })
  .catch(error => {
    console.error(`Error: ${error.message}`);
  });

///Q2///

const waitForAllPromises = (promises) => {
  return Promise.all(promises);
};


const promises = [
  new Promise(resolve => setTimeout(() => resolve(1), 1000)),
  new Promise(resolve => setTimeout(() => resolve(2), 1500)),
  new Promise(resolve => setTimeout(() => resolve(3), 500))
];

waitForAllPromises(promises)
  .then(results => {
    console.log('Resolved values:', results);
  })
  .catch(error => {
    console.error('Error:', error);
  });

//Q3///

// const fetchDataAndParseJSON = (url) => {
//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     });
// };

// // Usage
// const url = 'https://example.com/data.json';

// fetchDataAndParseJSON(url)
//   .then(data => {
//     console.log('Parsed JSON data:', data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


///Q4//

const sumOfResolvedValues = (promise1, promise2) => {
  return Promise.all([promise1, promise2])
    .then(([value1, value2]) => {
      if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        throw new Error('Resolved values are not valid numbers');
      }
      return value1 + value2;
    });
};


const promise1 = new Promise(resolve => resolve(5));
const promise2 = new Promise(resolve => resolve(10));

sumOfResolvedValues(promise1, promise2)
  .then(sum => {
    console.log('Sum of resolved values:', sum);
  })
  .catch(error => {
    console.error('Error:', error);
  });


///Q5//

const initialPromise = new Promise((resolve) => {
  resolve('Start Counting');
});

const counter = (value) => {
  console.log(value);
};

initialPromise
  .then((value) => {
    counter(value);
    return 1;
  })
  .then((value) => {
    counter(value);
    return 2;
  })
  .then((value) => {
    counter(value);
    return 3;
  })
  .then((value) => {
    counter(value);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// MAP//

//Q1//

const squareMap = numbers => {
  const resultMap = new Map();

  numbers.forEach(number => {
    resultMap.set(number, number * number);
  });

  return resultMap;
};

const NumbersArray = [1, 2, 3, 4, 5];
const rsult = squareMap(numbersArray);

console.log(result);

//Q2//

const createAgeMap = arrayOfObjects => {
  const ageMap = new Map();

  arrayOfObjects.forEach(obj => {
    if (obj.hasOwnProperty('name') && obj.hasOwnProperty('age')) {
      ageMap.set(obj.name, obj.age);
    }
  });

  return ageMap;
};

const peopleArray = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Eve', age: 28 }
];

const ageMapResult = createAgeMap(peopleArray);

console.log(ageMapResult);


//Q3//

const containsKey = (map, key) => {
  return map.has(key);
};

const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);

console.log(containsKey(myMap, 'b'));
console.log(containsKey(myMap, 'd'));

///Q4//

const filterMap = (originalMap, callback) => {
  const filteredMap = new Map();

  originalMap.forEach((value, key) => {
    if (callback(value, key)) {
      filteredMap.set(key, value);
    }
  });

  return filteredMap;
};


const originalMap = new Map([
  ['apple', 5],
  ['banana', 3],
  ['cherry', 8],
  ['date', 2]
]);

const callback = (value, key) => value > 3;

const filteredMap = filterMap(originalMap, callback);
console.log(filteredMap);


///Q5//

const mergeMaps = (map1, map2) => {
  const mergedMap = new Map([...map1, ...map2]);
  return mergedMap;
};


const map1 = new Map([
  ['apple', 5],
  ['banana', 3]
]);

const map2 = new Map([
  ['banana', 7],
  ['cherry', 8]
]);

const mergedMap = mergeMaps(map1, map2);
console.log(mergedMap);

///CLASSES///

///Q2///

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// const friend1 = new Person('John', 'Doe');
// const friend2 = new Person('Jane', 'Smith');

// console.log(`Hello, ${friend1.firstName} ${friend1.lastName}!`);
// console.log(`Hello, ${friend2.firstName} ${friend2.lastName}!`);

  
    
    
  
  //Q3///
  
          class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduction() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

// Example usage:
const person1 = new Person('John Doe', 30);
console.log(person1.introduction());


///Q4///

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}


const rectangle1 = new Rectangle(5, 10);
console.log(`Area: ${rectangle1.area()}`);
console.log(`Perimeter: ${rectangle1.perimeter()}`);



///Q5//

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  diameter() {
    return 2 * this.radius;
  }

  circumference() {
    return 2 * Math.PI * this.radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}


const circle1 = new Circle(5);
console.log(`Diameter: ${circle1.diameter()}`);
console.log(`Circumference: ${circle1.circumference()}`);
console.log(`Area: ${circle1.area()}`);


///Q6//

// Class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduction() {
//     return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
//   }
// }

// Class Student extends Person {
//   constructor(name, age, course) {
//     super(name, age);
//     this.course = course;
//   }

//   introduction() {
//     return `Hi, I'm ${this.name}, I'm ${this.age} years old, and I'm studying ${this.course}.`;
//   }
// }

// // Example usage:
// const student1 = new Student('TAYYABA', 17, 'COMMERCE');
// console.log(student1.introduction()); 

//Q7//


class rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }

  perimeter() {
    return 4 * this.side;
  }
}


const square = new Square(5);
console.log("Square area:", square.area());
console.log("Square perimeter:", square.perimeter());


///HOISTING///

//Q1//

function printValue() {
  console.log(myVar);
  var myVar = 10;
  console.log(myVar);
}

printValue();



///Q2////

function printValue() {
  console.log(myVar);
  let myVar = 10;
  console.log(myVar);
}

printValue();


///Q3///
function printValue() {
  const myVar = 10;
  console.log(myVar);
  myVar = 20;
  console.log(myVar);
}

printValue();


////Q4///

function printValue() {
  console.log(100)
}

printValue();


///Q5///

function functionA() {
  console.log("Function A has been called.");
  functionB();
}

function functionB() {
  console.log("Function B has been called.");
}

functionA();

// /THIS KEYWORD///


//Q1//

// Class PeRson {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   }
// }


// const person = new Person("John");


// person.greet(); 


///Q2//

class Car {
  constructor(brand) {
    this.brand = brand;
    this.speed = 0;
  }

  accelerate(value) {
    this.speed += value;
  }

  printSpeed() {
    console.log(`Current speed of the ${this.brand} car is ${this.speed} km/h.`);
  }
}
// Usage
const myCar = new Car("Toyota");
myCar.accelerate(50); 
myCar.printSpeed();   
//Q3//

class Calculator {
  constructor() {
    this.value = 0;
  }

  add(number) {
    this.value += number;
  }

  subtract(number) {
    this.value -= number;
  }

  multiply(number) {
    this.value *= number;
  }

  printValue() {
    console.log(`Current value is: ${this.value}`);
  }
}


const calculator = new Calculator();
calculator.add(5);         
calculator.subtract(3);   
calculator.multiply(10);   
calculator.printValue();   


///Q4//

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  printInfo() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
  }
}


const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
myBook.printInfo();  


///Q5//

// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//   }
// }

// const person1 = new Person("Alice", 30);
// const person2 = new Person("Bob", 25);

// person1.introduce(); 
// person2.introduce(); 

///Q6///

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count += 1;
  }

  reset() {
    this.count = 0;
  }
}


// const counter = new Counter();
console.log(counter.count); 
// counter.ncrement();
console.log(counter.count);
// counter.reset();
console.log(counter.count); 

///Q7//

class Product {
  constructor(name, price, discount) {
    this.name = name;
    this.price = price;
    this.discount = discount;
  }

  calculateDiscountedPrice() {
    const discountedAmount = (this.discount / 100) * this.price;
    const discountedPrice = this.price - discountedAmount;
    return discountedPrice;
  }
}


const product1 = new Product("Widget", 100, 20); 
const product2 = new Product("Gizmo", 50, 10); 

console.log(product1.calculateDiscountedPrice()); 
console.log(product2.calculateDiscountedPrice()); 


///Q8///



const game = {
  play() {
    
    console.log("Playing the game!");
  }
};

game.play();

/// CLOUSERS//

// // const counter = () => {
//   let count = 0; 

//   const incrementAndLog = () => {
//     count++;
//     console.log(count);
//   };




// // Usage:
// const myCounter = counter();

// myCounter(); // Logs: 1
// myCounter(); // Logs: 2
// myCounter(); // Logs: 3
// // ...and so on

///Q2//

const createMultiplier = (multiplier) => {
  return (number) => {
    return number * multiplier;
  };
};

const double = createMultiplier(2); 
const triple = createMultiplier(3); 

console.log(double(5)); 
console.log(triple(4)); 


///Q3//

const secretMessage = (message) => {
  return () => {
    console.log("Secret message:", message);
  };
};

const revealSecret = secretMessage("This is the secret!");

revealSecret(); 


//Q4//
 
const calculate = (num1, num2) => {
  return {
    add: () => {
      return num1 + num2;
    },
    multiply: () => {
      return num1 * num2;
    }
  };
};

const alculator = calculate(5, 3);

console.log(calculator.add());      
console.log(calculator.multiply()); 



          

  
  