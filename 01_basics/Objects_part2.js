//creating object using new keyword
const regularUser=new Object();
regularUser.name="swapnil";
regularUser.age=24;
regularUser.city="pune";

const regularUser2={
    name:"swapnil",
    age:22,
    city:"pune"
}
const regularUser3={
    name:"pratik",
    age:22,
    occuptaion:"job",
    city:"pune"
}
// merging two objects using Object.assign() method
const regularUser4=Object.assign({},regularUser3,regularUser2);
console.log(regularUser4);