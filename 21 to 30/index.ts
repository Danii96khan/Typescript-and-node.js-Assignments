//Assignment no 21


// interface Fruit {
//     name: string;
//     color: string;
//     quantity: number;
//   }
  
 
//   const apple: Fruit = {
//     name: "Apple",
//     color: "Red",
//     quantity: 10
//   };
  
//   const banana: Fruit = {
//     name: "Banana",
//     color: "Yellow",
//     quantity: 15
//   };
  
//   const orange: Fruit = {
//     name: "Orange",
//     color: "Orange",
//     quantity: 12
//   };
  
 
//   console.log("Apple:", apple);
//   console.log("Banana:", banana);
//   console.log("Orange:", orange);

//  // Assignment no 22

//   const numbers: number[] = [1, 2, 3, 4, 5];


// console.log(numbers[10]); 

//   // Assignment no 23

//   let age: number = 25;
//   let far: string = "John";
//   let isStudent: boolean = true;
//   let fruit: string = "apple";
//   let x: number = 10;
  
  
//   console.log("Is age > 18? Prediction: True");
//   console.log(age > 18);
  

//   console.log("Is name == 'John'? Prediction: True");
//   console.log(far == 'John');
  

//   console.log("Is isStudent true? Prediction: True");
//   console.log(isStudent);
  

//   console.log("Is fruit != 'banana'? Prediction: True");
//   console.log(fruit != 'banana');
  
 
//   console.log("Is x <= 10? Prediction: True");
//   console.log(x <= 10);
  
  
//   console.log("Is age < 20? Prediction: False");
//   console.log(age < 20);
  

//   console.log("Is name == 'Jane'? Prediction: False");
//   console.log(far == 'Jane');
  
  
//   console.log("Is isStudent false? Prediction: False");
//   console.log(!isStudent);
  

//   console.log("Is fruit == 'banana'? Prediction: False");
//   console.log(fruit == 'banana');
  
  
//   console.log("Is x > 20? Prediction: False");
//   console.log(x > 20);

//    // Assignment no 24

 
// let string1: string = "apple";
// let string2: string = "orange";
// console.log("Test: Is string1 equal to string2?");
// console.log(string1 === string2); 

// console.log("Test: Is string1 not equal to string2?");
// console.log(string1 !== string2); 


// let name1: string = "Alice";
// let name2: string = "alice";
// console.log("Test: Are name1 and name2 equal ignoring case?");
// console.log(name1.toLowerCase() === name2.toLowerCase()); 


// let num1: number = 10;
// let num2: number = 5;
// console.log("Test: Is num1 greater than num2?");
// console.log(num1 > num2); 

// console.log("Test: Is num1 less than num2?");
// console.log(num1 < num2); 

// console.log("Test: Is num1 greater than or equal to num2?");
// console.log(num1 >= num2); 

// console.log("Test: Is num1 less than or equal to num2?");
// console.log(num1 <= num2); 


// let isSunny: boolean = true;
// let isWarm: boolean = true;
// console.log("Test: Is it sunny and warm?");
// console.log(isSunny && isWarm); 

// let isRaining: boolean = true;
// console.log("Test: Is it sunny or raining?");
// console.log(isSunny || isRaining); 

// let fruits: string[] = ["apple", "banana", "orange"];
// console.log("Test: Is 'banana' in the fruits array?");
// console.log(fruits.includes("banana")); 


// console.log("Test: Is 'grape' not in the fruits array?");
// console.log(!fruits.includes("grape")); 


//    // Assignment no 25 

//   let alien_color: string = 'green';

// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points!");
// }


// let alienn_color: string = 'red'; 

// if (alienn_color === 'green') {
//     console.log("Congratulations! You just earned 5 points!");
// }

// // Assignment no 26



// let alien1_color: string = 'green';

// if (alien1_color === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the alien.");
// } else {
//     console.log("Congratulations! You just earned 10 points for shooting the alien.");
// }


// let alien2_color: string = 'red';

// //Assignment no 27



// let alien3_color: string = 'green';

// if (alien3_color === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else if (alien_color === 'yellow') {
//     console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
// } else if (alien_color === 'red') {
//     console.log("Congratulations! You just earned 15 points for shooting the red alien.");
// }



// let alien4_color: string = 'yellow';

// if (alien4_color === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else if (alien_color === 'yellow') {
//     console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
// } else if (alien_color === 'red') {
//     console.log("Congratulations! You just earned 15 points for shooting the red alien.");
// }


  
// let alien5_color: string = 'red';

// if (alien5_color === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else if (alien_color === 'yellow') {
//     console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
// } else if (alien_color === 'red') {
//     console.log("Congratulations! You just earned 15 points for shooting the red alien.");
// }

// //Assignment no 28

// let age1: number = 25;

// if (age1 < 2) {
//     console.log("The person is a baby.");
// } else if (age1 >= 2 && age1 < 4) {
//     console.log("The person is a toddler.");
// } else if (age1 >= 4 && age1 < 13) {
//     console.log("The person is a kid.");
// } else if (age1 >= 13 && age1 < 20) {
//     console.log("The person is a teenager.");
// } else if (age1 >= 20 && age1 < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }

// //Assignment no 29

// let favorite_fruits: string[] = ['apple', 'banana', 'strawberry'];
// let fruits_to_check: string[] = ['apple', 'banana', 'strawberry', 'orange', 'kiwi'];

// for (let fruit of fruits_to_check) {
//     if (favorite_fruits.includes(fruit)) {
//         console.log(`You really like ${fruit}s!`);
//     }
// }

// Assignment no 30

let usernames: string[] = ['admin', 'Alia', 'pooja', 'emraan', 'rashmika'];

for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}