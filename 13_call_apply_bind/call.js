const obj1=
{
    name:"Swapnil",
    surname:"Dahiphale"
}

const obj2=
{
    name:"pratik",
    surname:"jagtap"
}

function greeting(greet)
{
    console.log(`${greet}, ${this.name} ${this.surname}`);
    
}
greeting.call(obj1,"Hello"); // output: Hello, Swapnil Dahiphale
greeting.call(obj2,"Hello"); // output: Hello, pratik jagtap