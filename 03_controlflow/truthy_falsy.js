// (1) Falsy values
if("")  // 0, -0, 0n, "", null, undefined, Nan all these are falsy values
{
    console.log("Its a truthy value");
    
}
else 
{
    console.log("its a falsy value");
    
}

//(2) Truthy Values
if(function one(){}) //true, "false", [], {}, function one(){} all these are truthy values
{
    console.log("its a truthy value");
    
}
else
{
    console.log("its a falsy value");
    
}

//(3) anything inside a string is a truthy value
if("false")
{
    console.log("its a truthy value");
    
}
else{
    console.log("its a falsy value");
    
}
