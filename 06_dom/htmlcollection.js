let collection=document.querySelectorAll('li');
console.log(collection);

const array1=Array.from(collection);// converting nodelist to an array as we cannot use forEach on node list
array1.forEach((li)=>{
  li.style.backgroundColor="lightblue";
  li.style.margin="10px";
})
