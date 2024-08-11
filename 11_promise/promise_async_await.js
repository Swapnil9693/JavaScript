async function getName()
{
    try
    { 
    const response=await fetch('https://api.github.com/users/Swapnil9693');
    const data= await response.json();
    console.log(data.name);
    
    }
    catch
    {
    console.log('error no such data exist');
    
    }
}
getName();