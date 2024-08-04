// filter on array
const array1=[1,2,3,4,5,6,7,8,9,10];
const array2=array1.filter((item)=>{
  const item2=item%2==0;
  return item2;
});
console.log(array2);

// filter on array of objects
const movieList=[
    {
    movie:"KGF",
    yor:2018,
    grosscollection:1500
    ,actor:"Rocking Star Yash"
    } ,
    {
        movie:"Kalki",
        yor:2024,
        grosscollection:1000
        ,actor:"Rebel Star Prabhas"
    },
    {
        movie:"Pushpa",
        yor:2022,
        grosscollection:800
        ,actor:"Allu Arjun"
    },
    {
        movie:"Maharaja",
        yor:2024,
        grosscollection:400
        ,actor:"Vijay Sethupati"
    }

];
const result=movieList.filter((movie1)=>{
   return movie1.actor==="Rocking Star Yash";

}
    );
console.log(result);

// passing a function as parameter in filter
const array3=[10,20,30,40,50,60];
function checkAdult (age)
{
    return age>20;
}
const array4=array3.filter(checkAdult);
console.log(array4);


