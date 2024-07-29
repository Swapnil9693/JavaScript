const obj1={
    name:"swapnil",
    city:"pune",
    pincode:411048,
    age:24
};

const{name,city,pincode,age}=obj1;
console.log(name);

//using aliases in object

const{name:n,city:c,pincode:p}=obj1;
console.log(n);
console.log(c);
console.log(color);

//setting default values for properties which doesnt exist
const{color="black",name:a,city:b,pincode:d}=obj1;
console.log(color);