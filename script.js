//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.

let firstName = "Abhishek";
let lastName = "Kaundal";
let age = "17";
let country = "Africa";
let state = "Ghana";

localStorage.setItem("firstName", firstName);
localStorage.setItem("lastName", lastName);
localStorage.setItem("age", age);
localStorage.setItem("country", country);
localStorage.setItem("state", state);

console.log(localStorage)

//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.

let userName = localStorage.getItem("firstName")
let sirName = localStorage.getItem("lastName")
let theAge = localStorage.getItem("age")
let countryName = localStorage.getItem("country")
let stateName = localStorage.getItem("state")

console.log("Name: ", userName)
console.log("SirName: ", lastName)
console.log("Age: ", age)
console.log("Country: ", country)
console.log("State: ", state)


//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.

localStorage.removeItem("state");
console.log(localStorage);

//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.

localStorage.clear();
console.log(localStorage)

//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};

let stringified = JSON.stringify(user)
console.log(stringified)
