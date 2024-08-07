const buttons=document.querySelectorAll('.buttons');
const body=document.querySelector('body');
console.log(buttons);

buttons.forEach((button)=>
{
   button.addEventListener('click',function (e)
{
    if(e.target.id==="yellow")
    {
    body.style.backgroundColor="yellow";
    }
    else if(e.target.id=="grey")
    {
        body.style.backgroundColor="grey";
    }
    else if(e.target.id==="red")
    {
        body.style.backgroundColor="red";
    }
    else if(e.target.id==="lightblue")
        {
            body.style.backgroundColor="lightblue";
        }
    else if(e.target.id==="pink")
         {
                body.style.backgroundColor="pink";
         }
})
});


