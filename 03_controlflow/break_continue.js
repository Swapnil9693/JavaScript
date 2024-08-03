// (1) detecting value and breaking loop with break;
for(let i=0;i<10;i++)
{
    if(i===5)
    {
        console.log(`${i} is detected`);
        break;
        
    }
    console.log(i);
    
}

console.log("================================================");


//(2) skipping a particular number using continue statement
let a=3;
for(let i=0;i<10;i++)
{
    if(i===a)
    {
        console.log(`${i} is skipped`);
        continue;
        
    }
    console.log(`${i}`);
    
}