// Assignment no 31

// let users: string[] = []; 


// if (users.length > 0) {
  
//     console.log("Here are the usernames:");
//     users.forEach(user => {
//         console.log(user);
//     });
// } else {
   
//     console.log("We need to find some users!");
// }
// users = [];


// if (users.length > 0) {

//     console.log("Here are the usernames:");
//     users.forEach(user => {
//         console.log(user);
//     });
// } else {

//     console.log("We need to find some users!");
// }

//Assignment # 32
// let current_users: string[] = ["john", "emma", "james", "sarah", "alex"];


// let new_users: string[] = ["emily", "James", "megan", "sarah", "chris"];

// function isUsernameTaken(username: string): boolean {
//     return current_users.some(user => user.toLowerCase() === username.toLowerCase());
// }

// new_users.forEach(username => {
//     if (isUsernameTaken(username)) {
//         console.log(`The username '${username}' is already taken. Please enter a new username.`);
//     } else {
//         console.log(`The username '${username}' is available.`);
//     }
// });

// Assignment no 33


// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach(number => {
   
//     let ordinalEnding: string;
//     if (number === 1) {
//         ordinalEnding = "st";
//     } else if (number === 2) {
//         ordinalEnding = "nd";
//     } else if (number === 3) {
//         ordinalEnding = "rd";
//     } else {
//         ordinalEnding = "th";
//     }

//     console.log(`${number}${ordinalEnding}`);
// });

// // Assignment no 34


// let favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// for (let i = 0; i < favoritePizzas.length; i++) {
//     console.log(`I like ${favoritePizzas[i]} pizza.`);
// }

// console.log("Pizza is one of my favorite foods. I really love pizza!");

// // Assignment no 35

// let animals: string[] = ["Dog", "Cat", "Rabbit"];

// for (let i = 0; i < animals.length; i++) {
//     console.log(`A ${animals[i]} would make a great pet.`);
// }
// console.log("Any of these animals would make a great pet!");


// // Assignment no 36

// function make_shirt(size: string, message: string): void {
//     console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`);
// }

// make_shirt("Medium", "I love TypeScript!");

// // Assignment no 37

// function make_shirts(size: string = "Large", message: string = "I love TypeScript"): void {
//     console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`);
// }

// make_shirts();

// make_shirts("Medium");

// make_shirts("Small", "TypeScript is awesome!");


// // Assignement no 38

// function describe_city(city: string, country: string = "Unknown"): void {
//     console.log(`${city} is in ${country}.`);
// }
// describe_city("Karachi", "Pakistan");
// describe_city("Tokyo", "Japan");
// describe_city("Paris"); 

// // Assignment no 39

// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }


// let city1: string = city_country("Lahore", "Pakistan");
// let city2: string = city_country("New York", "USA");
// let city3: string = city_country("Sydney", "Australia");


// console.log(city1);
// console.log(city2);
// console.log(city3);

// Assignment no 40


function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}


let album1 = make_album("Adele", "21");
let album2 = make_album("Ed Sheeran", "÷", 12); // Example with number of tracks included
let album3 = make_album("Taylor Swift", "1989");


console.log(album1);
console.log(album2);
console.log(album3);