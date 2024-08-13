// Creating a prototype for individual data types like String,Arrays
let name="Swapnil        ";
String.prototype.getTrueLength=function()
{
 console.log(`${this.trim().length}`);
 
}
//name.getTrueLength();

function one()
{
    let oneName="Pratik";
    oneName.getTrueLength();
    
}
one();