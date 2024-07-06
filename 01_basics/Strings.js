const gameName=new String("swapnil");
console.log(gameName);
console.log(gameName[1]);

// methods of String

let userName="Swapnil Dahiphale";
let daySentence="monday tuesday wednesday thursday friday saturday sunday";
let newName="    premala     ";
let url="https://www.swapnildahiphale%20.com";
// toUpperCae() method
console.log(userName.toUpperCase());
// substring() method
console.log(userName.substring(0,6)); // excludes the end index and returns chars prior that index
// slice() method 
console.log(userName.slice(0,6));
// trim() method
console.log(newName.trim());
// trimEnd() method
console.log(newName.trimEnd());
 // trimStart() method
console.log(newName.trimStart());
// replace() method 
console.log(url.replace("%20","-"));
// includes() method
console.log(url.includes("swapnil"));
// split() method
let week=daySentence.split(" ",2);
console.log(week[0]);
