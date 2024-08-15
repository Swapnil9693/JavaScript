const person={
    name:"Swapnil"
}
function user(surname)
{
    console.log(`The name of the user is : ${this.name} ${surname}`);// person object is bound to new function 'newPerson'
    
}
const newPerson=user.bind(person,"Dahiphale");
newPerson();