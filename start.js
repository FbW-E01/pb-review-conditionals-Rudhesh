// Save a random whole number between -10 and 10 to a variable.

let randomNum = Math.floor((Math.random() * 21) - 10);

console.log(randomNum)

// If that variable is greater than 0, print "Ye" and otherwise print "No"

const num = 4;

let greaterNum = (num > 0) ? "Ye" : "No";

console.log(greaterNum);

// If that variable is greater than 5, print "Winner", otherwise if that variable is greather than 0, print "OK", otherwise print "Try again!"

const num2 = 6;

if (num2 > 5) {

    console.log("Winner")
}

else if (num2 > 0)

    console.log("OK")

else {

    "Try again!"
}

// Save another random number between -10 and 10 to a variable.

let anotherRandomNum = Math.floor(Math.random() * 21) - 10;

console.log(anotherRandomNum);

// If both variables are more than 5, print "Good scores!"

if (randomNum > 5 && anotherRandomNum > 5) {

    console.log("Good scores")
}

// If either variable is below -9, print "Minus nine!"

if (randomNum < -9 || anotherRandomNum < -9) {
    console.log("Minus nine!")
}

// Create a variable to store a message. If your random numbers added together is smaller than zero, save the message "We have gone sub zero!". Otherwise, set the message to null.

const message = randomNum + anotherRandomNum < 0 ? "We have gone sub zero!" : null;

console.log(message);