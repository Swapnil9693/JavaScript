const array1=[10,20,30,40,50,60];
const array2=array1.forEach((num,index,arr)=>
    {
        console.log(num,index,arr);
        
    }
);
console.log(array2);

//note: (1) foreach loop iterates over each element of an array in ascending order.
     // (2) it always returns undefined.


     // for each loop to iterate over an object
     const arrayobj=[{name:"swapnil",age:24},{name:"pratik",age:23},{name:"pratik dahiphale",age:23},{name:"sandhya",age:25}];
     const array3=arrayobj.forEach((item)=>{
        console.log(item.name);
        console.log(item.age);
        
        
     });
     console.log(array3);
     