// a function called sum that takes in two numbers as arguments and returns their sum


function sum(x, y) {
    return x+y;
}
console.log(`the sum is ${sum(2, 3)}`);

//a function called nextNumber that takes in a number as an argument, increments it by 1 to find the next number, and then returns the next number.

function nextNumber(y) {
    return y+1;
}

console.log(`the next number is ${nextNumber(7)}`)

// a function called rectanglePerimeter that takes in the length and width as arguments and returns the perimeter of the rectangle.

function rectanglePerimeter(x, y) {
    return 2*(x+y);
}
console.log(`the perimeter of the rectangle is ${rectanglePerimeter(4, 3)}`)

//a function called returnSomethingToMe that returns the string "something" followed by a space " " followed by the string that was passed into the function

function returnSomethingToMe(strr) {
    return "something"+ strr;
}
console.log(returnSomethingToMe(" is better than nothing"));
console.log(returnSomethingToMe(" nice"));
console.log(returnSomethingToMe(" pinocchio"));

// a function called greaterBMI that will take in as the first arguement the BMI of Bob and as the second Argument the BMI of Jane. If Bob has a bigger BMI than jane, your function should return the string "Bob", if Jane has a bigger BMI than Bob, it should return the string "Jane", if they have the same BMI, it should return the string "Equal".

function greaterBMI(fPersonInput, sPersonInput) {
    if (fPersonInput > sPersonInput){
        results="BOB";
    } 
    else if(fPersonInput < sPersonInput){
        results="JANE"
    }
    else{
        results="equal"
    }
    return results;
}
console.log(greaterBMI(30, 25));
console.log(greaterBMI(35, 40));
console.log(greaterBMI(35, 35));

// a function called basketBallPoints, the first argument should be the number of two pointers scored by the team and the second argument the number of three pointers scored by the team. The function returns the final points for the team.

function basketBallPoints(twoPointer, threePointer) {
    return (twoPointer*2 + threePointer*3);     
}
console.log(`The final score is ${basketBallPoints(1,1)}`);
console.log(`The final score is ${basketBallPoints(7,5)}`);
console.log(`The final score is ${basketBallPoints(0,5)}`);

// a function called isSumMoreThan100 return true if their sum is greater than 100 and false if their sum is less than 100.

function isSumMoreThan100(a,b) {
    if (a+b>100){
        sumMore = 'true'
    }
    else{
        sumMore = 'false'
    }
    return sumMore;
}
console.log(isSumMoreThan100(25,55));
console.log(isSumMoreThan100(72,38));

// a function called convertToSeconds that takes in the number of minutes as an arguments and returns the seconds equivalent
function convertToSeconds(minutes) {
    return (minutes*60);
}
console.log(`the equivalent seconds is ${convertToSeconds(6)}`);

// a function called greater that takes in three numbers as arguments and returns the greatest number among the three

function greater(x,y,z){
    return Math.max(x,y,z);
}
console.log(`The greater input is ${greater(2,35,9)}` )
console.log(`The greater input is ${greater(23,23,23)}` )

// a function called least that takes in three numbers as arguments and returns the least among the three

function least(x,y,z){
    return Math.min(x,y,z);
}
console.log(`The least input is ${least(2,35,9)}` )
console.log(`The least input is ${least(23,23,23)}` )

// a function called footballPoints that returns the number of points a football team has obtained so far, the first argument for this function is the number of games a team has won, the second argument is the number of games the team has drawn and the third arguement is the number of times the team has lost. 3 points are awarded for every game won, 1 point for every game draw and 0 points for every game lost.
function footballPoints(wins, draws, losses) {
    return (wins * 3) + (draws * 1) + (losses * 0);
}


console.log(footballPoints(5, 0, 2)); 
console.log(footballPoints(0, 0, 2)); 
console.log(footballPoints(5, 2, 0)); 

// a function called isEven that takes in a number as an argument, the function returns true if a number is even and returns false if a number is odd. Use this function to log to the console all the even numbers between 0 and 101.
function isEven(number) {
    return number % 2 === 0;
}

for (let i = 0; i <= 101; i++) {
    if (isEven(i)) {
        console.log(i);
    }
}
