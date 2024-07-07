//(1) new Date()
let date1=new Date();
console.log(date1);

//(2) new Date(date string)
let date2=new Date("October 5 2024");
console.log(date2);

//----------------------------------------
let date3=new Date("2024 01 12 ");

//.toLocaleString() method
console.log(date3.toLocaleDateString());

//.toISOString() method
console.log(date3.toISOString());

//.toJSON() method
console.log(date3.toJSON());

//.toLocaleTimeString() method
console.log(date3.toLocaleTimeString());

//new Date(year.month)
let date4=new Date(2024,0,2);// here month starts from 0 in javascript as its an array
console.log(date4.toLocaleDateString());

//new Date(year,month,day)
let date5=new Date(2024,6,15);
console.log(date5.toLocaleDateString());

//new Date(year,month,day,hour)
let date6=new Date(2024,6,15,4);
console.log(date6.toLocaleString());
