// Chapter 20 – for loops nested
console.log("🌟🌟🌟 Chapter 20 🌟🌟🌟 ");

// Task 1: Nested for loop for name combinations
let firstNames = ["Lil", "Big"];
let lastNames = ["Zzz", "Boom"];
console.log("All combinations:");
for (let i = 0; i < firstNames.length; i++) {
    for (let j = 0; j < lastNames.length; j++) {
        console.log(firstNames[i] + " " + lastNames[j]);
    }
}
// Task 2: Explain loop iterations
console.log("\n If outer loop runs 3 times and inner loop runs 2 times:");
console.log("Inner loop will run 3 * 2 = 6 times total");

// Task 3: Modified nested loop (skip when indexes are same)
console.log("\nCombinations where indexes are not the same:");
for (let i = 0; i < firstNames.length; i++) {
    for (let j = 0; j < lastNames.length; j++) {
        if (i !== j) {
            console.log(firstNames[i] + " " + lastNames[j]);
        }
    }
}

// Chapter 21 – Changing case
console.log("\n🌟🌟🌟 Chapter 21 🌟🌟🌟 ");


// Task 1: Convert user input to lowercase
let userInput = prompt("Enter Something:");
console.log("Lowercase:", userInput.toLowerCase());

// Task 2: Normalize city names
let city1 = "New York".toUpperCase();
let city2 = "new york".toUpperCase();
console.log("Normalized city comparison:", city1 === city2);

// Task 3: Importance of case in validation
console.log("Importance of case in validation:");
console.log("- Ensures consistent comparisons regardless of user input style");
console.log("- Prevents duplicate entries that only differ in case");
console.log("- Makes searches more reliable");

// Chapter 22 – Strings: measuring length and extracting parts

console.log("\n🌟🌟🌟 Chapter 22 🌟🌟🌟 ");
// Task 1: Get first 5 characters
let str = "JavaScriptRocks";
console.log("First 5 characters:", str.slice(0, 5));

// Task 2: Get last character
let input = prompt("Enter a words :");
console.log("Last character:", input[input.length - 1]);

// Task 3: Full name length
let fullName = prompt("Enter your full name:");
console.log("Name length:", fullName.length);

// Chapter 23 – Strings: finding segments
console.log("\n🌟🌟🌟 Chapter 23 🌟🌟🌟 ");
// Task 1: Find position of "dog"
let sentence = "The lazy dog sleeps.";
console.log("Position of 'dog':", sentence.indexOf("dog"));

// Task 2: Check for "hello" in input
let user_Input = prompt("Enter some text :");
console.log("Contains 'hello':", user_Input.toLowerCase().includes("hello"));

// Task 3: indexOf when string not found
let word = "hello";
console.log("indexOf when string not found returns:", word.indexOf("xyz")); // Output: -1

// Chapter 24 – Strings: finding a character at a location
console.log("\n🌟🌟🌟 Chapter 24 🌟🌟🌟 ");

// Task 1: Character at position 4
let string_ = "JavaScript";
console.log("Character at position 4:", string_.charAt(4));

// Task 2: User string and position
let userStr_ = prompt("Enter a string:");
let position = parseInt(prompt("Enter a position:"));
console.log("Character at position:", userStr_.charAt(position));

// Task 3: Out of bounds index
let outOfBounds = "JavaScript";
console.log("Out of bounds character:", outOfBounds.charAt(100));

// Chapter 25 – Strings: replacing characters

console.log("\n🌟🌟🌟 Chapter 25 🌟🌟🌟");

// Task 1: Replace "bad" with "good"
let message = "This is a bad example.";
console.log("Replaced string:", message.replace("bad", "good"));

// Task 2: Replace all "JS" with "JavaScript"
let text = "JS is great. I love JS!";
console.log("Replaced all JS:", text.replace(/JS/g, "JavaScript"));

// Task 3: Customize template message
let username = prompt("Enter your name:");
console.log("\nCustom message:", "Hi! NAME👋".replace("NAME", username));

// Chapter 26 – Rounding numbers
console.log("\n🌟🌟🌟 Chapter 26 🌟🌟🌟");

// Task 1: Different rounding methods
console.log("Math.round(2.6):", Math.round(2.6));
console.log("Math.floor(2.6):", Math.floor(2.6));
console.log("Math.ceil(2.6):", Math.ceil(2.6));

// Task 2: Round user input
let userNum = parseFloat(prompt("Enter a number to round:"));
console.log("Rounded number:", Math.round(userNum));

// Task 3: Negative number rounding
console.log("Math.floor(-2.9):", Math.floor(-2.9));
console.log("Math.ceil(-2.9):", Math.ceil(-2.9));
console.log("Difference: floor goes to lower integer, ceil to higher");

// Chapter 27 – Generating random numbers
console.log("\n🌟🌟🌟 Chapter 27 🌟🌟🌟");
// Task 1: Random number between 1 and 6

let diceValue = Math.random() * 6;
diceValue = Math.ceil(diceValue);
console.log("Dice roll:", diceValue);

// Task 2: Coin toss

let coinResult = Math.random() < 0.5 ? "Heads" : "Tails";
console.log("Coin toss:", coinResult);

// Task 3: Random password
let randomPassword = Math.floor(Math.random() * 9000) + 1000;
console.log("Random password:", randomPassword);


// Chapter 28 – Converting strings to integers and decimals
console.log("\n🌟🌟🌟 Chapter 28 🌟🌟🌟");

// Task 1: String to float
let number = parseFloat("45.67");
console.log("float of 45.67:", number);

// Task 2: Parse "123px"
let value = parseInt("123px");
console.log("123px:", value);

// Task 3: Parse "abc"
let val = parseInt("abc");
console.log("abc:", val);

// Chapter 29 – Converting strings to numbers, numbers to strings
console.log("\n🌟🌟🌟 Chapter 29 🌟🌟🌟");

// Task 1: Number to string
"Type of converted string:"
let num = 100;
let str_ = num.toString();
console.log("Type of converted string:", typeof str_);

// Task 2: String to number
let strNum = "2025";
strNum = Number(strNum) + 10;
console.log("Result:", strNum);

// Task 3: parseInt vs Number()
console.log("parseInt('10.5'):", parseInt("10.5"));
console.log("Number('10.5'):", Number("10.5"));
console.log("Difference: parseInt discards decimals, Number keeps them");

// Chapter 30 – Controlling the length of decimals
console.log("\n🌟🌟🌟 Chapter 30 🌟🌟🌟");

// Task 1: toFixed(2)
let precise = 123.45678;
console.log("2 Decimals:", precise.toFixed(2));


// Task 2: Round to 1 decimal
let num_ = parseFloat("12.999");
let rounded = Math.round(num_ * 10) / 10;
console.log("Rounded to 1 decimal:", rounded);

// Task 3: User decimal rounded to 3 places
let _userInput = prompt("Enter a decimal number:");
let userDecimal = parseFloat(_userInput);
console.log("Rounded to 3 decimals:", userDecimal.toFixed(3));

// Chapter 31 – Getting the current date and time
console.log("\n🌟🌟🌟 Chapter 31 🌟🌟🌟");

// Task 1: Current date and time
let now = new Date();
console.log("Current date/time:", now);

// Task 2: Extract year
let year = now.getFullYear();
console.log("Current year:", year);


// Task 3: Time-based greeting
let hours = now.getHours();
let greeting = hours < 12 ? "AM" : "PM";
console.log("Greeting:", greeting);


// Chapter 32 – Extracting parts of the date and time

console.log("\n🌟🌟🌟 Chapter 32 🌟🌟🌟 ");

// Task 1: Day, month, year
let day = now.getDate();
let month = now.getMonth(); // Months are zero-based
let currentyear = now.getFullYear();

console.log("Day:", day);
console.log("Month:", month);
console.log("Year:", currentyear);


// Task 2: Hours and minutes
let hrs = now.getHours();
let mins = now.getMinutes();
console.log("Hours:", hrs);
console.log("Minutes:", mins);


// Task 3: Digital clock format
let h = now.getHours();
let m = now.getMinutes();
let time = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m);
console.log("Digital Clock:", time);


