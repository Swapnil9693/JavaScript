let object1={
    hobby:"cricket",
    name:"Swapnil",
    age:24,
    college:"SITS",
    city:"pune",
    height:"5.8ft"
}

//console.log(object1.name);//normal property access method using dot operator

// let {name,age,city,college}=object1;// Object destructuring to access the object properties easily
// object1.name="pratik";// name property reassigned a value
// console.log(name);// change in object's property doesnt affect destructured variables 
// console.log(age);
// console.log(city);

const{hobby="save people"/*(default value to be extracted in case no value assigned in original object)*/,name:n,city:c,height:h}=object1;// we can also give aliases to properties to access it easily
console.log(n);
console.log(hobby);
console.log(c);
console.log(h);
console.log(object1.name);

