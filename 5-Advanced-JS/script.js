//Function constructor

/*var john = {
    name: "John",
    yearOfBirth: 1990,
    job: "teacher"   
};

var Person = function(name,yearOfBirth,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;   
}

Person.prototype.calculateAge = 
    function() {
        console.log(2017 - this.yearOfBirth);
    };

Person.prototype.lastName = "Smith";

var john = new Person("John",1990,"teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

//Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2017 - this.yearOfBirth);
    }
};
var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1998;
john.job = "teacher";

var jane = Object.create(personProto, {
    name: { value: "Jane" },
    yearOfBirth: { value: 1969 },
    job: { value: "designer" }
});*/

// Primitives vs Objects
/*
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Objects
var obj1 = {
    name: "John",
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


///Functions
var age = 27;
var obj = {
    name:  "Jonas",
    city: "Lisbon"
};

function change(a, b) {
    a = 30;
    b.city = "San Francisco";
}

change(a,b);

console.log(age);
console.log(obj.city);
*/

//////Passing functions as arguments

/*var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr,fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2017 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round (206.9 - (0.67 * el));
    } else {
        return -1;
    }
}
 var ages = arrayCalc(years,calculateAge);

var FullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(rates);
*/

//////Functions returning functions

/*function interviewQuestion(job) {
    if (job === "designer") {
        return function(name) {
            console.log(name +  " can you please explain what UX design is?");
        }
    } else if (job === "teacher") {
        return function(name) {
            console.log("What object do you teach, " + name + "?");
        }
        
    } else {
        return function(name) {
            console.log("Hello " + name + ", what do you do?");
        }
    }
}
var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");

teacherQuestion("John");
designerQuestion("John");
designerQuestion("Jane");
designerQuestion("Mark");
designerQuestion("Mike");

interviewQuestion("teacher")("Mark");
*/

/////IIFE

/*function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/

/*(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();
///console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

*/


////Closures
function retirement(retirementAge) {
    var a = " years left until retirement.";
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

retirement(66)(1990);