// function foo(x, y){
//     return x+y;
// }

// var a = 3;

// console.log(foo(a,a*2));

// function foo2(x,y,z){
//     return x+y+z;
// }

// function xx(x=3){
//     alert("x");
// }

// alert(foo.length);

// function foo(x=3){
//     console.log(x);
// }

// foo();

// foo(undefined);

// foo(null);

// foo(4);
/*
function funcParam(para){
    console.log(para);
}

funcParam([1,2]);


function fooArrays([a,b,...args]) {
    console.log(a);
    console.log(b);
    console.log(args);
}

function fooArrayys(a,b,...args){
    console.log(a);
    console.log(b);
    console.log(args);
}
fooArrays([a,b,c]);
fooArrayys(1,2,3);
 */

// Higher order functions
/*
function  HigherOrderFunction() {


}

function forEach(List, fn) {
    //for(let ){

    //}
    for(var i=0; i< List.length; i++){
        fn(List[i]);
    }

}


forEach([1,2,3,4], function fn(val) {
    console.log(val);
})

*/

// First Class Functions

//var hello=function (name) {
  //  return "hello"+ name;
//}

//var greeting = function (name) {
  //  return hello(name);
//}

//console.log(hello);
//console.log(hello('Murshid'));
//console.log(greeting('murshid'));

// Maps in the javascript

// Pure Functions and impure functions

//var xs=[1,2,3,4,5];

//console.log(xs.slice(0,3));
//console.log(xs)
//console.log(xs.slice(3,5));

// Currying functions in javascript

/*
var add= function (x) {
    return function (y) {
        return x + y;
    }
}

var multiple=add(function multiple(x) {
    return x*2;
})

console.log(multiple(2)(3)(4))
console.log(add(22)(23));
*/
// composing the function

//function multiplication(x) {
  //  return x*3;
//}

//var multiplybyanonimus= function (x) {
  //  return x*3;
//}

//higher order and composition and objects
// Order of Evolution in the javascript

//Closure and recursion

//Closures

//console.log(name);


//var xs=[1,2,3,4,5];

//console.log(xs.slice(xs,0,2));
//low dash

//var add= function (x) {
    //return function (y) {
    //    return x+y;
  //  }
//}

//var increament =add(1);
//alert(console.log(add(1)(1)));
//console.log(add(1));
//console.log(increament);


//Map
/*
var foods=[
    {name: 'carrot', type: 'vegetables'},
    {name: 'potatoes', type: 'vegetables'},
    {name: 'apple', type: 'fruits'},
    {name: 'graps', type: 'fruits'},
    {name: 'carrot', type: 'vegetables'}
];


var name= foods.map(function (food) { return food.name+"  murshid"});

console.log(name);


*/













