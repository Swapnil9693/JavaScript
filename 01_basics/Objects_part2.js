//creating object using new keyword
const regularUser=new Object();
regularUser.name="swapnil";
regularUser.age=24;
regularUser.city="pune";

const regularUser2={
    name:"swapnil",
    age:22,
    city:"pune"
}
const regularUser3={
    name:"pratik",
    age:22,
    occuptaion:"job",
    city:"pune"
}
// merging two objects using Object.assign() method
const regularUser4=Object.assign({},regularUser3,regularUser2);
console.log(regularUser4);

const obj1={ id:"swa123",name:"swapnil",city:"pune"};
const obj2={ age:24,country:"india",occupation:"job"};
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);

// using spread operator for merging two objects
const animal={name:"tiger",color:"brown",isStripped:true};
const animal2={name1:"elephant",color1:"grey",hasIvories:true};
const zoo={...animal,...animal2};
console.log(zoo);

// Object.keys() method
const objectNew={bird:"parrot",color:"green",peakColor:"red",canFly:true};
const arrayBirdKey=Object.keys(objectNew);
console.log(arrayBirdKey);

// Object.values() method
const objectNew1={bird:"parrot",color:"green",peakColor:"red",canFly:true};
const arrayBirdKey1=Object.values(objectNew);
console.log(arrayBirdKey1);

// Object.entries()
const objectNew2={bird:"parrot",color:"green",peakColor:"red",canFly:true};
const arrayBirdKey2=Object.entries(objectNew);
console.log(arrayBirdKey2);

// .hasOwnProperty() method
const bool=objectNew2.hasOwnProperty('peakColor');
console.log(bool);