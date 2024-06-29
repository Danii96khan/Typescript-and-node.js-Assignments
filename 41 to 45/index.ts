// Assignment no 41


// function show_magicians(magicians: string[]): void {
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }

// let magician_names: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];


// show_magicians(magician_names);

// // Assignment no 42

// // Function to show the names of magicians
// function show_magicianss(magicians: string[]): void {
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }

// function make_great(magicians: string[]): string[] {
//     let great_magicians: string[] = [];
//     magicians.forEach(magician => {
//         great_magicians.push(`the Great ${magician}`);
//     });
//     return great_magicians;
// }

// let magician_namess: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// let great_magicians: string[] = make_great(magician_namess);

// show_magicians(great_magicians);

// Assignment no 43


// function show_magicians(magicians: string[]): void {
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }
// function make_greatt(magicians: string[]): string[] {
//     let great_magicians: string[] = [];
//     magicians.forEach(magician => {
//         great_magicians.push(`the Great ${magician}`);
//     });
//     return great_magicians;
// }


// let magician_namesss: string[] = ["Harry Houdni", "David Copperfied", "Penn Jillett", "Teller"];

// let great_magiciansss: string[] = make_greatt([...magician_namesss]); 

// console.log("Original Magicians:");
// show_magicians(magician_namesss);

// console.log("\nGreat Magicians:");
// show_magicians(great_magiciansss);

// Assignment no 44


// function make_sandwich(...items: string[]): void {
//     console.log("Sandwich order summary:");
//     if (items.length === 0) {
//         console.log("You haven't selected any items for your sandwich.");
//     } else {
//         console.log("You've ordered a sandwich with the following items:");
//         items.forEach(item => {
//             console.log(`- ${item}`);
//         });
//     }
//     console.log("-----------------------");
// }
// make_sandwich("Ham", "Cheese", "Lettuce", "Tomato");
// make_sandwich("Turkey", "Swiss Cheese");
// make_sandwich();


// Assignment no 45

function store_car_info(manufacturer: string, model: string, ...args: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let car_info: { manufacturer: string, model: string, [key: string]: any } = { manufacturer, model };
    args.forEach(arg => {
        for (let key in arg) {
            car_info[key] = arg[key];
        }
    });
    return car_info;
}


let car = store_car_info("Toyota", "Camry", {color: "Silver", year: 2022});

console.log(car);