/*var a=1;
var b=2;
var c=a+b;
console.log(a+b+2);


//arrays
cars=["BMW","KIA","Creta","Range Rover"];
console.log(cars)
cars.push("Thar");
console.log(cars[2]);


//object
const person = {
    name:"Saloni",
    age:23,
    isStudent:true,
    hobbies:["Dance","Cycle","Badminton"]
};
console.log(person)
console.log(typeof(person.hobbies));


//filter
const ages=[12,24,36,23];
const result=ages.filter(CheckAge);

function CheckAge(age){
    return age%12==0
}
console.log(result)



//input from user
var prompt = require('prompt-sync')();
const age=prompt("Enter age:")
if(age>=18){
    console.log("Legal")
}
else{
    console.log("Not legal")
}





GuestList=["Sal","Ved","Gol","Min"]

var name=prompt("Enter name:")
if(name in GuestList){
    console.log("Welcome!")
}
else{
    console.log("Not a guest")
}



var os=require('os');
var user=os.userInfo();
console.log(user.username);




//JSON is used to organise the data (Used by server-waiter)

// const jsonString='{"name":"saloni","age":23}';
// const jsonObject=JSON.parse(jsonString);    //converted string to object

// console.log(jsonObject);
// console.log(typeof(jsonObject));




const jsonObject={name:"sal",hobby:"dance"};
const jsonString=JSON.stringify(jsonObject);    //converted object to json string

console.log(jsonString);
console.log(typeof(jsonString));
*/



//Creating server via express
const express = require('express')
const app = express()
const db=require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json())


app.get('/', function (req, res) {
  res.send('Hello World! Welcome to Saloni Diaries...!!!')
})

app.get('/saloni',(req,res)=>{
    res.send('Beatiful soul! Adored by many, lovable, smart with great wisdom.')
})

app.get('/love', (req,res) => {
    res.send('Love is something we cannot describe, when you love you forget what was your goal for a moment and it leaves you speechless in fornt of your love. If someone can describe it in words it means they can weight it with words and does not experience love truly.' )
})

app.get('/lifestyle',function(req,res){
    res.send('I want a lifestyle in which my parents live happily and peacefully with no pressure of doing work at their old age. Having 4floor house, 4cars with 4bikes. Me living my life on my own terms. Me being boss of my life having financial stability, married to my love on my own expenses, doing great in my career/work')
})


/*
//saving data through POST method
app.post('/person',(req,res)=>{
    const data=req.body;    //assuming request body contains the the person data

    //create a new person document using mongoose model
                    const newPerson=new Person();
    
                    // newPerson.name=data.name;
                    // newPerson.age=data.age;
                    // newPerson.work=data.work;
                    // newPerson.mobile=data.mobile;
                    // newPerson.email=data.email;
                    // newPerson.address=data.address;
                    // newPerson.salary=data.salary;
                    
 })
*/

/*
app.post('/person',(req,res) => {
    const data=req.body;
    const newPerson=new Person();
    newPerson.save((error,savedPerson)=>{
        if(error){
            console.log("Error while saving Person data",error)
            res.status(500).json({error:"internal server error"})
        }else{
            console.log("Data saved successfully")
            res.status(200).json(savedPerson)
        }
    })
})
*/




// app.post('/items',(req,res) => {
//     res.send("Items data saved!")
// })



const personRoutes=require('./routes/personRoutes')
app.use('/person',personRoutes)

const menuRoutes=require('./routes/menuRoutes')
app.use('/menu',menuRoutes)

app.listen(3000, () => {
    console.log("Listening on port 3000");
})