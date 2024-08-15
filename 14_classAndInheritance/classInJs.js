class user{
constructor(username)
{
    this.username=username;
}
logMe()
{
console.log(`The name of user is : ${this.username}`);

}
}
class teacher extends user{
    constructor(username,email,password)
    {
       super(username);
       this.email=email;
       this.password=password;

      
       
    }
    teacherInfo()
    {
        console.log(`The name of teacher is ${this.username}, email is ${this.email} and password is ${this.password}`);
    }
}

const user1=new user("Swapnil");
user1.logMe();
const user2=new teacher("PRATIK","pvd@gmail","123");
user2.teacherInfo();
user2.logMe();