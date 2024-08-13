// Creating prototype of Object
Object.prototype.printMe=function()
{
   console.log(`${this}`);
   
}

let name="swapnil";
name.printMe();

function one()
{
    return "pratik";
}
one().printMe();



    
