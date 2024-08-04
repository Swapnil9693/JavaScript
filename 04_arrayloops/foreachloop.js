const array1=[10,20,30,40,50,60];
const array2=array1.forEach((num,index,arr)=>
    {
        console.log(num,index,arr);
        
    }
);
console.log(array2);

//note: (1) foreach loop iterates over each element of an array in ascending order.
     // (2) it always returns undefined.