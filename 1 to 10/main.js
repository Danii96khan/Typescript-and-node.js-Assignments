//assignment # 2
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple,
// such as, “Hello Eric, would you like to learn some Python today?”
var person_Name = "Eric";
console.log("Hello ".concat(person_Name, ", would you like to learn some python today?"));
//assignment # 3
//Name Cases: Store a person’s name in a variable, and 
//then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Eric";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toUpperCase());
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
//assignment # 4
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:
var famousQuote = "Genius is one percent inspiration and ninety-nine percent perspiration.";
var author = "Thomas Edison";
console.log("".concat(author, " once said, \"").concat(famousQuote, "\""));
//assignment # 5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
//Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Thomas Edison";
var message = "".concat(famous_person, " once said, \"").concat(famousQuote, "\"");
console.log(message);
//assignment # 6
//Stripping Names: Store a person’s name, 
//and include some whitespace characters at the beginning and end of the name.
//Make sure you use each character combination, "\t" and "\n", at least once
//Print the name once, so the whitespace around the name is displayed. 
//Then print the name after striping the white spaces.
var namewithWhitespace = "\t \n daniyal khan \t \n";
console.log("name with White space:", namewithWhitespace);
var strippedName = namewithWhitespace.trim();
console.log("stripped Name:", strippedName);
//assignment # 7
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8
//Be sure to enclose your operations in print statements to see the results.
var additionResult = 5 + 3;
console.log("Addition Result:", additionResult);
var subtractionResult = 10 - 2;
console.log("Subtraction Result:", subtractionResult);
var multiplicationResult = 4 * 2;
console.log("Multiplication Result:", multiplicationResult);
var divisionResult = 16 / 2;
console.log("Division Result:", divisionResult);
//assignment # 8
//You should create four lines that look like this:
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//assignment # 9
//Favorite Number: Store your favorite number in a variable
//Then, using that variable, create a message that reveals your favorite number. Print that message.
var favoritedResult = 10;
var messageResult = "My favorite Number: ".concat(favoritedResult);
console.log(messageResult);
//assignment # 10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each
//If you don’t have anything specific to write because your programs are too simple at this point,
//just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//define two numbers
var number1 = 15;
var number2 = 20;
//add two numbers
var result = number1 + number2;
//print result
console.log(result);
