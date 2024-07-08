// // array literal method to create an array
// const array1=["swapnil","fruit",10,true,'A'];
// console.log(array1);
// array1.forEach((element)=>console.log(element));

// // new Array constructor method to create an array
// console.log("-----------------------------------------");
// console.log("-----------------------------------------");

// const array2=new Array("mango","orange","lemon","apple","banana");
// console.log(array2);
// array2.forEach((e)=>console.log(e));

// //creating shallow copy of array1
// let array3;
// array3=array1;// shallow copy created
// array3[1]="dahiphalle";
// console.log(array3);
// console.log(array1);// changes reflected in original array object as array1 and array3 share same refrence of the object

// push() and pop() methods
// let array4=[10,20,30,40,50];
// array4.push(60);
// console.log(array4);

// //--------------------------------------------------------------------------------------------------------------------------
// array4.pop();
// console.log(array4);

// // unshift() and shift() methods
// array4.unshift(70);
// console.log(array4);
// array4.shift();
// array4.shift();
// console.log(array4);

// includes() method
const array5=[10,20,30,40,50];
let present=array5.includes(30);
let present1=array5.includes(5);
console.log(present);
console.log(present1);

// indexOf() method
const array6=[10,20,30,40,50];
let index=array6.indexOf(40);
let index1=array6.indexOf(5);
console.log(index);
console.log(index1);

// .slice() method
let array7=[10,20,30,40,50];
let array8=array7.slice(0,3);
console.log(array8);
console.log(array7);

//.splice() method
let array9=[10,20,30,40,50];
let array10=array9.splice(0,3);
console.log(array10);
console.log(array9);