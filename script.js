// ====================
// Part 1: Variables & Conditionals
// ====================
let userName = "John";    // variable declaration
let userAge = 25;

if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// ====================
// Part 2: Custom Functions
// ====================

// Function 1: Greet user
function greetUser(name) {
  return "Welcome, " + name + " 🚀";
}

// Function 2: Double a number
function doubleNumber(num) {
  return num * 2;
}

console.log(greetUser(userName));
console.log("Double of 7 is:", doubleNumber(7));

// ====================
// Part 3: Loops
// ====================

// Example 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Count:", i);
}

// Example 2: While loop
let count = 1;
while (count <= 3) {
  console.log("While Loop Count:", count);
  count++;
}

// ====================
// Part 4: DOM Interactions
// ====================

// 1. Change text content on button click
document.getElementById("btnChange").addEventListener("click", function() {
  document.getElementById("message").textContent = greetUser(userName);
});

// 2. Display loop output in a list
document.getElementById("btnLoop").addEventListener("click", function() {
  let list = document.getElementById("listOutput");
  list.innerHTML = ""; // clear old list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i + " doubled is " + doubleNumber(i);
    list.appendChild(li);
  }
});

// 3. Styling DOM element dynamically
document.getElementById("message").style.color = "blue";

// 4. Open external JavaScript link in a new tab
document.getElementById("btnLink").addEventListener("click", function() {
  window.open("https://www.scichart.com/javascript-chart-features/?utm_source=google&utm_medium=cpc&gad_source=1&gad_campaignid=11646648631&gbraid=0AAAAADppSGiuBPvvmtLkwfjLSwc8pqqWH&gclid=CjwKCAjwlOrFBhBaEiwAw4bYDW7Dd6RuPB8auq1m59o-Eokktp2cHw9V2UrkKzyfiLNL-RlPQ4sOERoCkRkQAvD_BwE", "_blank");
});

