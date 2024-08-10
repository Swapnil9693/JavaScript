
let hex='0123456789ABCDEF';
let intervalId;
const randomNumber=()=>
{   let color='#';
    for(let i=0;i<6;i++)
        {
            color=color+hex[Math.floor(Math.random()*16)];
        }
        console.log(color);
        
        return color;
}
randomNumber();
//(1) start button code
document.querySelector('#button1').addEventListener('click',function(e)
{
   intervalId=setInterval(function ()
{
    document.querySelector('#body').style.backgroundColor=randomNumber();

},500);
    
})

//(2) stop button code
document.querySelector('#button2').addEventListener('click',function(e)
{
    clearInterval(intervalId);
})