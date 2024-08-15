const user1={
    name:"Swapnil",
    age:24,
    language:"java",
    showDetails(job,money)
    {
        console.log(`the name of user is ${this.name} age is ${this.age} and language is ${this.language} also his job is ${job} and he makes a solid amount of ${money}`);
        
    }
}
user1.showDetails();
const user2={
    name:"Pratik",
    age:23,
    language:"python",
    
}
user1.showDetails.apply(user2,["developer","$132000"]);//here we have given user2 as 'this' context so it will refer to user2's properties when used this keyword