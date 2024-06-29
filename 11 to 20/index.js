//assignment #11
//Names: Store the names of a few of your friends in a array called names.
//Print each person’s name by accessing each element in the list, one at a time.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var names = ["Zain", "Moiz", "Taha", "farjad", "Shoaib"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for each
names.forEach(function (friend) {
    console.log(friend);
});
//for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friend = names_1[_i];
    console.log(friend);
}
//assignment #12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name
//print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
for (var i = 0; i < names.length; i++) {
    console.log("Hello, ".concat(names[i], "! how are you today?"));
}
//for each
names.forEach(function (friend) {
    console.log("Hello, ".concat(friend, "! how are you today?"));
});
//for of loop
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var friendName = names_2[_a];
    console.log("Hi, ".concat(friendName, "! how are you today?"));
}
//assignment #13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car
//and make a list that stores several examples. Use your list to print a series of statements
//about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ["car", "motorcycle", "bicycle"];
for (var i = 0; i < transportation.length; i++) {
    console.log("I would like to own a ".concat(transportation[i], "!"));
}
//for each
transportation.forEach(function (item) {
    console.log("I would like to own a ".concat(item, "!"));
});
//for of loop
for (var _b = 0, transportation_1 = transportation; _b < transportation_1.length; _b++) {
    var item = transportation_1[_b];
    console.log("I would like to own a ".concat(item, "!"));
}
//assignment #14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite
// Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestlist = ["Zain", "Moiz", "Taha", "farjad", "Shoaib"];
//invite each guest for dinner
//for each
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you are cordially invited to dinner"));
});
// map ()
// invite guest
var invitation = guestlist.map(function (guest) { return "Dear ".concat(guest, ",you are cordially invited to dinner"); });
console.log(invitation);
invitation.forEach(function (invitations) {
    console.log(invitations);
});
//Assignnment # 15
var guestlists = ["Zain", "Moiz", "Taha", "Farjad", "Shoaib"];
var unableAttend = guestlists.splice(1, 1)[0];
//console.log(`${unableAttend}cant make dinner`);
//guestlists.push("Daniyal");
//guestlists.forEach(guest => {
// console.log(`Dear ${guest}, you are cordially invited to dinner`);
//});
// assignment # 16
console.log("Great News! we found a bigger table");
guestlist.unshift("Moiz");
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Taha");
guestlist.push("khan");
console.log(guestlist);
var fruits = ["Apple", "banana", "orange"];
fruits.unshift("Mango");
console.log(fruits);
var num1 = 9.99;
var nums = Math.floor(num1);
console.log(nums);
//Assignment # 17
console.log("unfortunately! the new dinner table wont arrive so we can invite only 2 guests");
guestlist.unshift("alice", "bob");
console.log("updated list of guest:", guestlist);
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    if (removedGuest !== undefined) {
        console.log("".concat(removedGuest, ",we can invite you"));
    }
}
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you both are cordially invited to dinner"));
});
guestlist.splice(0, guestlist.length);
console.log("updated list of guest:", guestlist);
//  //question 18 
var placesToVisit = [
    "california",
    "switzerland",
    "melbourne",
    "london",
    "Germany"
];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
console.log("Original order after sorting:", placesToVisit);
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
console.log("Original order after sorting in reverse:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Original order after reversing again:", placesToVisit);
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisit);
//    //question 19 
var originalDinnerGuests4 = [
    "Emraan",
    "Pooja",
    "Rashmika"
];
console.log("You are inviting ".concat(originalDinnerGuests4.length, " people to dinner."));
var guestWhoCantMakeIts4 = "Alia";
console.log("".concat(guestWhoCantMakeIts4, " can't make it to the dinner."));
var newGuests = "kriti";
var updatedDinnerGuestss = originalDinnerGuests4.filter(function (guest) { return guest !== guestWhoCantMakeIts4; });
updatedDinnerGuestss.push(newGuests);
console.log("Good news! We found a bigger dinner table.");
updatedDinnerGuestss.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\nYou are cordially invited to dinner at my place. It would be an honor to have your presence and engage in enlightening conversations.\n\nLooking forward to your company,\n[farzam]"));
});
// question 20 
var landmarks = [
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
landmarks.forEach(function (landmark, index) {
    console.log("".concat(index + 1, ". ").concat(landmark));
});
