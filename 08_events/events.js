
document.querySelector('#button1').addEventListener('click',function (e)
{
    document.querySelector('#para').innerText=e.target.id;
});



document.querySelector('#button2').addEventListener('mouseover',function (e)
{
   const button2=document.querySelector('.button-2');
   const color=button2.style.backgroundColor="red";

   
});

document.querySelector('#button2').addEventListener('mouseout',function (e)
{
   document.querySelector('.button-2').style.backgroundColor="lightgrey";

   
   
});
