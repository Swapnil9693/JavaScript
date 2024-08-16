const array1=[10,20,30,40,50,60];
const array2=array1.map((num,index,array)=>
    {  
        console.log(index,array);
        
        return num+10;
    })
    console.log(array2);
    console.log(array1);
    