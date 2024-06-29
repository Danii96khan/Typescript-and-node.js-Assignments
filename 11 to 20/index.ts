//assignment #11
//Names: Store the names of a few of your friends in a array called names.
//Print each person’s name by accessing each element in the list, one at a time.

let names: string[] = ["Zain","Moiz","Taha","farjad","Shoaib"];
for(let i =0; i< names.length; i++)
{
    console.log(names[i]);
}

//for each
names.forEach(friend => {
    console.log(friend);
});

//for of loop

for(let friend of names)
{
    console.log(friend);
}

//assignment #12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name
//print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

for(let i =0; i< names.length; i++)
{
    console.log(`Hello, ${names[i]}! how are you today?`);
}

//for each

names.forEach(friend => {
    console.log(`Hello, ${friend}! how are you today?`);
});

//for of loop

for(let friendName of names)
{
    console.log(`Hi, ${friendName}! how are you today?`);
}

//assignment #13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car
//and make a list that stores several examples. Use your list to print a series of statements
//about these items, such as “I would like to own a Honda motorcycle.”

let transportation: string[] = ["car","motorcycle","bicycle"];

for(let i =0; i< transportation.length; i++)
{
    console.log(`I would like to own a ${transportation[i]}!`);
}

//for each

transportation.forEach(item => {
    console.log(`I would like to own a ${item}!`);
});

//for of loop

for(let item of transportation)
{
    console.log(`I would like to own a ${item}!`);
}

//assignment #14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite
// Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestlist: string[] = ["Zain","Moiz","Taha","farjad","Shoaib"]

//invite each guest for dinner

//for each

guestlist.forEach(guest =>{
    console.log(`Dear ${guest},you are cordially invited to dinner`);
});

// map ()
// invite guest
let invitation:string[] =  guestlist.map(guest =>`Dear ${guest},you are cordially invited to dinner`)
console.log(invitation);

invitation.forEach(invitations => {
    console.log(invitations);
});

//Assignnment # 15
let guestlists: string[] = ["Zain","Moiz","Taha","Farjad","Shoaib"];
let unableAttend: string = guestlists.splice(1,1)[0];
//console.log(`${unableAttend}cant make dinner`);
//guestlists.push("Daniyal");
//guestlists.forEach(guest => {
   // console.log(`Dear ${guest}, you are cordially invited to dinner`);
//});

// assignment # 16
console.log("Great News! we found a bigger table"
);
guestlist.unshift("Moiz");
guestlist.splice(Math.floor(guestlist.length/2),0,"Taha");
guestlist.push("khan")
console.log(guestlist);

let fruits: string[] = ["Apple","banana","orange"]
fruits.unshift("Mango");
console.log(fruits);

let num1:number = 9.99;
let nums:number = Math.floor(num1)
console.log(nums);

//Assignment # 17

console.log("unfortunately! the new dinner table wont arrive so we can invite only 2 guests");
guestlist.unshift("alice","bob");
console.log("updated list of guest:",guestlist);
while(guestlist.length>2){
    let removedGuest : string| undefined =guestlist.pop();
    if(removedGuest !== undefined){
        console.log(`${removedGuest},we can invite you`);
    }

}
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you both are cordially invited to dinner`);
})
guestlist.splice(0,guestlist.length)
console.log("updated list of guest:",guestlist);


//  //question 18 

 let placesToVisit: string[] = [
     "california",
     "switzerland",
     "melbourne",
     "london",
     "Germany"
   ];
  
   console.log("Original order:", placesToVisit);
  
   console.log("Alphabetical order:", [...placesToVisit].sort());
  
   console.log("Original order after sorting:", placesToVisit);
  
   console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
  

   console.log("Original order after sorting in reverse:", placesToVisit);
  

  placesToVisit.reverse();
   console.log("Reversed order:", placesToVisit);
  
   placesToVisit.reverse();
   console.log("Original order after reversing again:", placesToVisit);
  
   placesToVisit.sort();
   console.log("Sorted in alphabetical order:", placesToVisit);
  
   placesToVisit.sort((a, b) => b.localeCompare(a));
   console.log("Sorted in reverse alphabetical order:", placesToVisit);

//    //question 19 
  
 const originalDinnerGuests4: string[] = [
     "Emraan",
     "Pooja",
     "Rashmika"
   ];
  
   console.log(`You are inviting ${originalDinnerGuests4.length} people to dinner.`);
  
   const guestWhoCantMakeIts4: string = "Alia";
   console.log(`${guestWhoCantMakeIts4} can't make it to the dinner.`);
  

   const newGuests: string = "kriti";
   const updatedDinnerGuestss: string[] = originalDinnerGuests4.filter((guest) => guest !== guestWhoCantMakeIts4);
   updatedDinnerGuestss.push(newGuests);

   console.log("Good news! We found a bigger dinner table.");
  
   updatedDinnerGuestss.forEach((guest) => {
    console.log(`Dear ${guest},\n\nYou are cordially invited to dinner at my place. It would be an honor to have your presence and engage in enlightening conversations.\n\nLooking forward to your company,\n[farzam]`);
  });
  

  // question 20 
  
 
  const landmarks: string[] = [
    "Eiffel Tower",
    "Great Wall of China",
    "Statue of Liberty",
    "Taj Mahal",
    "Machu Picchu",
    "Sydney Opera House",
    "Petra",
    "Colosseum",
    "Christ the Redeemer",
    "Pyramids of Giza"
  ];
  
  
  console.log("List of Famous Landmarks:");
  landmarks.forEach((landmark, index) => {
    console.log(`${index + 1}. ${landmark}`);
  });




