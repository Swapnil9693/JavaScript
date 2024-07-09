// // trying to add to arrays using push()
// const array1=["kgf","salaar","pyshpa","kantara"];
// const array2=["war","pathhan","saaho","jawaan"];
// let array3=array1.push(array2);
// console.log(array1);
// console.log(array3);

// // using concat method to add two or multiple arrays
// const array4=['a','b','c','d','e'];
// const array5=['f','g','h','i','j'];
// const array6=['k','l','m','n','o'];
// const array7=array4.concat(array5,array6);
// console.log(array7);
// console.log(array4);

// // using spread operators to add two or multiple arrays
// const array8=[10,20,30,40,50];
// const array9=[60,70,80,90,100];
// const array10=[...array8,...array9];
// console.log(array10);

// // flat() method 
// const array11=[10,20,30,[40,50],60,[70,80,[90,100]]];
// console.log(array11[5][2][0]);
// const array12=array11.flat(2);//here 2 is depth 
// console.log(array12);

// Array.isArray() method to check if array or not
const string="hitesh";
const isArray=Array.isArray(string);
console.log(isArray);

// Array.from() method
const string1="swapnil";
const array12=Array.from(string1);
console.log(array12);

//Array.from(array,mapfn,thisarg) 
const string2="123456";
const array13=Array.from(string2,(x)=> x+1);
console.log(array13);

//Array.of() method
const array14=Array.of(1,2,3,"swapnil","pratik");
console.log(array14);