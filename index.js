// Iteration 1: Names and Input
let hacker1 = "Sarah";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Olivier";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}  characters.`)
}

else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

else {
    console.log(`Wow, you both have equally long names, ${hacker2.length}  characters!`)
};


// Iteration 3: Loops
let name1 = " "
for (let i = 0; i < hacker1.length; i++) {
    name1 += hacker1[i] + " "
}
console.log(name1.toUpperCase());

let name2 = " "
for (let j = hacker2.length - 1; j >= 0; j--) {
    name2 += hacker2[j]
}
console.log(name2);


if (name1 > name2) {
    console.log("The driver's name goes first.")
}
else if (name2 < name1) {
    console.log("Yo, the navigator goes first, definitely.")
}
else {
    console.log("Yo, the navigator goes first, definitely.")
};

/* Bonus 1 */
const longText = `Morbi ut neque placerat, consectetur turpis in, tincidunt magna. Cras id tincidunt quam. Sed dictum mollis finibus. Donec sodales dolor sed velit volutpat, et congue mauris ullamcorper. Nullam sit amet purus at dolor vulputate finibus. Vestibulum ac ex vehicula, eleifend enim id, venenatis nisi. Quisque quis ipsum dapibus, mattis nulla quis, dictum elit. 

Suspendisse potenti. Suspendisse velit ipsum, euismod quis malesuada vel, elementum feugiat lorem. Praesent fermentum dui enim, ut tempus urna molestie at. Aliquam sed suscipit neque, vitae tempor nulla. Aenean in nulla ullamcorper, tincidunt tortor ac, consectetur magna. Praesent vestibulum non sapien eget malesuada. Aenean augue turpis, accumsan eget justo non, malesuada ullamcorper dui. 

Pellentesque viverra risus velit, sed lobortis erat semper in. In efficitur magna in leo faucibus tincidunt. Ut quis libero tortor. In sed fringilla erat. Morbi vestibulum massa sit amet mollis auctor. Donec vel arcu in ex pretium eleifend. Nullam quis aliquam nunc. Nunc metus est, placerat pellentesque molestie euismod, elementum ut augue. Nam posuere iaculis elit.`;


let countWords = longText.split(" ");
console.log(`Number of words in the text: ${countWords.length}`);

let etCount = 0;
for (let i = 0; i < countWords.length; i++) {
    if (countWords[i] === "et") {
        etCount++
    };
};
console.log(etCount);

/* Bonus 2 */