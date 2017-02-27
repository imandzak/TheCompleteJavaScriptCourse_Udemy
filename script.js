// LECTURE; VARIABLES
/*
var name = "John";
console.log(name);

var lastName = "Smith";
console.log(lastName);

/*var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/


// LECTURE:VARIABLES 2
/*var name = ("John");
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = "teacher";
isMarried = false;

console.log(name + " is a " + age + " years old " + job + ". Is he married? " + isMarried + ".");

age = "thirty six";
job = "driver";

console.log(name + " is a " + age + " years old " + job + ". Is he married? " + isMarried + ".");

//var LastName = prompt("What is the lastname?");
//console.log(lastName);

alert(name + " is a " + age + " years old " + job + ". Is he married? " + isMarried + ".");*/

//LECTURE: OPERATORS

var now = now;
var birthYear = 2016 - 26;

var birthYear = 2016 - 26 * 2;

//2016 - 52
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++;
// ++ = 26 + 1 = 27
//ageJohn = ageJohn + 1;
//27+1=28

ageMark *= 2;
// 26 * 2 =52

console.log(ageJohn);
console.log(ageMark);



/////////////////////
///LECTURE: IF ELSE

var name = "John";
var age = 26;
var isMarried = "no";
    
    
/*if(isMarried === "yes") {
    console.log(name + "isMarried");
} else {
console.log(name + " will hopefully marry soon :)")}*/

var name = "John";
var age = 26;
var isMarried = "yes";
    
    
if(isMarried === "yes") {
    console.log(name + " is Married");
} else {
console.log(name + " will hopefully marry soon :)")}


//isMarried = false;

/*if(isMarried) {
   console.log("YES!"); 
}else {
    console.log("NO!");
}*/
    
if (isMarried) {
   console.log("YES!"); 
}

if (23 === "23") {
    console.log("Something to print...");
}
    

/////////////////////////////////////////////////////
//////BOOLEAN LOGIC AND SWITCH


/*var age = 20;
if (age < 20) {
    console.log("John is a teenager");
} else if (age >= 20 && age < 30) {
    console.log("John is a young man.");
} else {
    console.log("John is a man.");
}

var job = "teacher";
job = prompt("What does John do?");

switch (job) {
    case "teacher":
        console.log("John teaches kids.");
        break;
    case "driver":
        console.log("John drives a cab in Lisbon.");
        break;
    case "cop":
        console.log("John helps fight crime.");
        break;
    default:
        console.log("John does something else.");
}*/

////////////////////////////////////////
////////CHALLENGE

/*var name = "John";
console.log(name);
var name = "Mark";
console.log(name);

var ageJohn = 20;
var ageMark = 19;
var Johnheight = 180;
var Markheight = 180;
/*if (Markheight < Johnheight ) {
    console.log("John is the highest!");
} else if (Markheight > Johnheight && Markheight < Johnheight) {
    console.log("Mark wins");
} else {
    console.log("Both are tall!");
}*/

/*var scoreMark  = Markheight + ageMark * 5; 
var scoreJohn = Johnheight + ageJohn * 5;
if (scoreMark >= scoreJohn) {
    console.log("Mark wins the game with" + scoreMark + "points!");
} else if (scoreMark < scoreJohn) {
    console.log("John wins the game with " + scoreJohn + " points!" );
} else {
    console.log("There is a draw.");
}
  
 var ageJessy = 21;
 var Jessyheight = 185;

/*if (Markheight = Johnheight && Jessyheight <= Markheight ) {
    console.log("John is the highest!");
} else if (Markheight > Johnheight && Markheight < Johnheight && Jessyheight >Johnheight) {
    console.log("Mark wins");
} else {
    console.log("Jessy is the highest!");
}*/
 
/*var scoreJessy = Jessyheight + ageJessy * 5;

if (scoreMark > scoreJohn && scoreMark > scoreJessy  ) {
    console.log("Mark wins with " + scoreMark + " points");
} else if (scoreJohn > scoreMark && scoreJohn > scoreJessy ) {
    console.log("John wins the game with " + scoreJohn + "  points!" );
} else if (scoreJessy > scoreMark && scoreJessy > scoreJohn) {
    console.log("Jessy wins the game with " + scoreJessy + "  points!");
} else {
    console.log("It is a draw");
}*/


////////////////////////////////////////////////
/////lecture: FUNCTIONS

function calculateAge(yearofBirth) {
    var age = 2016 - yearofBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageMary);

function yearsUntilretirement(name,year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement >= 0) {
       console.log(name + " retires in " + retirement + " years."); 
    } else {
       console.log(name + " is already retired."); 
    }  
} 

yearsUntilretirement("John", 1990);
yearsUntilretirement("Mike", 1969);
yearsUntilretirement("Mary", 1948);



/////////////////////////////////////////////////////////////////////////LECTURE : STATEMENTS AND EXPRESSIONS

function someFun(par) {
    //code
}

var someFum = function(par) {
    //code
}

//Expression
3 + 4;
var x = 3;

//statements
/*if (x === s) {
    //do something
}
*/

///////////////////////////////////////////////////////////////////////ARRAYS

var names = ["John","Jane", "Mark"];
var years = new Array("1990","1968","1948");

console.log(names[2]);
names[1] = "Ben";
console.log(names);

var john = ["John", "Smith",1990, "designer",false];

john.push("blue");//add to the end of array
john.unshift("Mr.");////add something mist
john.pop();// remove from the end of array
john.shift(); ///remove from the beggining
console.log(john);

if (john.indexOf("teacher") === -1); {
    console.log("John is NOT a teacher.");
}

/////////////////////////////////////////////////////////////////////lecture: objects

var john = {
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false
};
console.log(john.lastName);
console.log(john["lastName"]);

var xyz = "job";
console.log(john[xyz]);

john.lastName = "Miller";
john["job"] = "programmer";

console.log(john);

var jane = new Object();
jane.name = "Jane";
jane.lastName = "Smith";
jane["yearOfBirth"] = 1969;
jane["job"] = "retired";
jane["isMarried"] = true;

console.log(jane);


///////METHODS

///VERSION 1
/*var john = {
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false,
    family: ["Jane", "Mark", "Bob"],
    calculateAge: function() {
        return 2016 - this.yearOfBirth;
    }
};

////console.log(john.calculateAge(1990));

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/

///VERSION 2

var mike = {
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1950,
    job: "teacher",
    isMarried: false,
    family: ["Jane", "Mark", "Bob"],
    calculateAge: function() {
        //return 2016 - this.yearOfBirth;
        this.age = 2016 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);


///////////LECTURE : LOOPS


//// FOR loop
for (var i = 0; i < 10  ; i++) {
    console.log(i);
}

/*

0, true,print 0, update i to 1
1, true, print 9, update i to 10
10, false,end loop!
*/


var names = ["John", "Jane", "Mary","Mark", "Bob"];

for ( var i = 0; i < 5; i++) {
    console.log(names[i]);
}

/*for ( var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
*/


for (var i = names.length - 1; i>=0; i--) {
    console.log(names[i]);
}

for (var i = 1; i <= 5; i++) {
    console.log(i);
    
    if (i === 3) {
        break;
    }
}

for (var i = 1; i <= 5; i++) {
    console.log(i);
    
    if (i === 3) {
        continue;
    }
   console.log(i); 
}


///// WHILE loop
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}



//////////CHALLENGE 2

var years = [2001, 1985, 1994, 2014, 1973];
var ages = [];

for (var i = 0; i < years.length; i++) {
    ages[i] = 2016- years[i];
}

for (var i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
        console.log("Person " + (i + 1) + " is " + ages[i] + " years old, and is of full age.")
    } else {
        console.log("Person " + (i + 1) + " is " + ages[i] + " years old, and is NOT of full age.")
    }
}



var years = [2001, 1985, 1994, 2014, 1973];

function printFullAge(years) {
    var ages = [];
    var fullAges = [];
for (var i = 0; i < years.length; i++) {
    ages[i] = 2016- years[i];
}

for (var i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
        console.log("Person " + (i + 1) + " is " + ages[i] + " years old, and is of full age.")
        fullAges.push(true);
    } else {
        console.log("Person " + (i + 1) + " is " + ages[i] + " years old, and is NOT of full age.");
        fullAges.push(false);
    }
}
    return fullAges;
}


var years = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);



///////////////////////////////////////
// Lecture: Hoisting

///function declaration

calculateAge(1990);

function calculateAge(year) {
    console.log(2016 - year);
}



//function expresion
var retirement = function(year) {
    console.log(65 - (2016 -year));
}

retirement(1990);




///variables
console.log(age);
var age = 23;


function foo() { 
    var age = 65;
    console.log(age);
}
foo();
console.log(age);







///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}




///////////////////////////////////////
// Lecture: The this keyword

///console.log(this);
calculateAge(1995);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
  
var john = {
    name: "John",
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        /*
        function innerfunction() {
            console.log(this);
        }
        innerfunction();
    */
    }
}

john.calculateAge();


var mike = {
    name: "Mike",
    yearOfBirth: 1994
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();



