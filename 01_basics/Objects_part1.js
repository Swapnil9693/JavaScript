// creating objects using object literal approach
const obj1={
    name:"Swapnil",
    age:24,
    city:"pune",
    profession:"SDE"
}
console.log(obj1.name);
console.log(obj1["name"]);
obj1["name"]="Pratik";
console.log(obj1.name);

// // creating object using Object.create() method
// const obj2=Object.create();
// obj2.name="sandhya";
// obj2.age=26;
// obj2.city="pune";
// console.log(obj2);

// // using new Object() 
// const obj2=new Object();
// obj2.name="vasant";
// obj2.job="marketing";
// obj2.age=57;
// obj2.city="pune";
// console.log(obj2["job"]);

// adding symbol as a key in object and accessing it
const mySym=Symbol("dollar")
const obj3={
    name:"gajodhar",
    age:35,
    occupation:"business",
    city:"rajasthan",
    [mySym]:"rupees"
}
console.log(obj3[mySym]);
console.log(obj3);