//(1) Object.getOwnPropertyDescriptor(ObjectName,'property')
const obj1=
{
    name:"Swapnil",
    college:"SITS",
    city:"pune"
}
const properties=Object.getOwnPropertyDescriptor(obj1,'name');// Used for getting Description of properties of an Object
console.log(properties);

//(2) Object.defineProperty(ObjectName,'property',{property definition})
Object.defineProperty(obj1,'name',
    {
        value:"Pratik",
        writable:true,
        enumerable:true,
        configurable:false
    })
    console.log(obj1);
    
