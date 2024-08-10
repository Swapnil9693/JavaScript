//(1) Changing the heading of the page using setTimeout()
function changeHead()
{
    document.querySelector('#heading').innerHTML="Swapnil Dahiphale coding";
}

const clearId=setTimeout(changeHead,3000);
console.log(clearId);


//(2)Clearing the timeout using timeout clear Id
document.querySelector('#button').addEventListener('click',function (e)
{
   clearTimeout(clearId);
   console.log("timeout cleared");
   
})