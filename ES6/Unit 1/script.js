// runing the node module from the es lint command line
// ./node_modules/.bin/eslint {script folder we want to include}
var process= require("process");
var add = (x,y) => x+y;
console.log(add(5,3));

process.stdout.on("vale", function(x, y){
    console.log(add(5,4));
});

