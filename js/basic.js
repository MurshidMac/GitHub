// This is single line comment for the javascript for editing purposes
/* this is a multiline comment for javascript
    this is way more fun for me
    I love javascript


 */
// this is most widely used javascript function for testing
console.log("<Murshid Hassen>");

// the alert function for the javascript
//alert("Murshid hassen say yes")
var themeaningofLife=42,
// if you declare a variable without the var keyword the variable automatically becomes the global variable which is really bad as a programmer
foo='bar';
//baz, quxx;

var test;
console.log(test);
//let vaku;
//console.log(vaku);
//foo=bar;
var number=1;
// javascript has the nan function that has the best feature
var string="Murshid hassen";
var string2= "this is your second journey in the javascript world";
var joined='wait he said'+string+"  "+ "here he goes";
var array=[5,'murshsid',3, true];
// these are the objects in the javascript for the function writing the value
var objects={
    myNumber:10,
    myString:"This is fucking awesome",
    value:'this is just fun'
};
// this how the objects in the javascript are accessed this is fucking awesome
// I love it
objects.myNumber;//this is just the same javascript function that i use fucking awesome
objects['myString'];// this will return the String call
objects.value;// this is value in the objects
objects.myString;// this will also return the string call in the array


//var addition=1+1;
//var subtraction=1-1;
//var multiplication=10*1;
//var divison;

// there are like non strict and strick javascript comparison operators
// this is like === is not equal to ==
// similarly the != is not equal to !==
//=== the three equal sign checks for the data type finally
// operator specidence happens when there are like too many inputs comming
// when 2 same operators are there happening in the same file the first one takes the correct notion(This happens from left to right)

//=======================================Objects in javascript================================================

//var name='murshid';
//function foo(){

//}

// isNaN() function that checks for Not a Number in javascript
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// Its a special type of Number
var stringvalue='string that usally changes according to your pattern and its Just awesome'
console.log(stringvalue)
var fuctionalprogramming= function (x) {
    return function(x){
        return x+x
    }
}
stringvalue= fuctionalprogramming(23)
stringvalue(26)
console.log(stringvalue)

// Higer Order functions that explains how the programming to multiply a string with a number
function multiply(x) {
    return function (x) {
        return'myname'*x
    }
}
var namemultiply= multiply(34)

namemultiply(56)
console.log(namemultiply)


// Arrays and objects in javascript for better understanding

var arraystarted=['string',3, true];

function arrayElements(x){
    return function(x){
        return array[x];
    }
}
x=2
var listcall=arrayElements(x)

console.log(listcall(2))

















