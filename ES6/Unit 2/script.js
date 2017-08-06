//scope of the variables in a file will be
var dowork= function(falg){
    if(falg==false){
        var x=3
    }
    return x;
}
// this is bad because it uses the block scope within any of the projects
// we should use let to solve this issue
// or else it will return the following to solve the issue
var doworkProperly= function(falg){
    if (falg==true){
        let x=3;
    }
    // these are bad coding practices 
    if (flag){
        // this is good practive
        let y=9;
    }
    let x=4;
    return x;   
}


describeHowAfunctionWorks("This is how the let and var works", function(){

    it("will provide us with some handy feature", function(){
        var dowork= function(flag){
            if(flag){
               var x =3     
            }
            return x;
        }
        var result= dowork(true);
        expect(result).toBe(3);
    }) 
})
