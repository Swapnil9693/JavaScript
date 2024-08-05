//(1).getElementById() Method
let i=document.getElementById('id-para');
i.style.backgroundColor="red"; // sets the color of paragraph to blue;
console.log(i); // returns element values

//(2).getElementByClassName() Method
let b=document.getElementsByClassName("heading");

for(let a=0;a<b.length;a++)
{
    b[a].style.backgroundColor="red";
}


