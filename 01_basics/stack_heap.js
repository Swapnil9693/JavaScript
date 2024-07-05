let val1=13;
let val2=val1;
val2=17;
console.log(val1);
console.log(val2); // here actual values doesnt go onto change 
console.log("--------------------------------------------------------------");
let obj1={
    userName:"Swapnil",
    userId:319
};
let obj2=obj1;
obj2.userName="Pratik";
console.log(obj1);
console.log(obj2);// here userName gets changed when we make changes into 'obj2' as 'obj1' passed its reference to 'obj2',so whatever changes made into 'obj2' will reflect in 'obj1' 

