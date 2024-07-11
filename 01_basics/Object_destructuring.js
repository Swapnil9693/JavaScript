const object1={
    name:"Swapnil",
    age:24,
    college:"SITS",
    city:"pune",
    height:"5.8ft"
}

console.log(object1.name);//normal property access method using dot operator

const{name,age,city,college}=object1;// Object destructuring to access the object properties easily
console.log(name);
console.log(age);
console.log(city);

const{name:n,city:c,height:h}=object1;// we can also give aliases to properties to access it easily
console.log(n);
console.log(c);
console.log(h);

