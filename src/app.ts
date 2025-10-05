//interface extends

interface User{
    name:string,
    email:string,
    phone:number,
    gender?:string,


}
interface Admin extends User{
    admin?:boolean;
}

const obj1={
    name:"Harshit",
    email:"harshit@gmail.com",
    phone:8191095166

}


function getUserData(obj:Admin):void{



}

getUserData(obj1)

// Type Alias

type value=number|string|null;
let a:value

a=null;
a=10;

type arg=string|number

function abcd(obj:arg){}

let name:string="harshit";
function greet(name:string){
    console.log("Hello "+name);
}

greet(name);


function isLegal(age:number):boolean{
    if(age>=18){
        return true;
    }
    else {
        return false;
    }

}
function delayedFun(fn:()=>void){
    setTimeout(fn,1000);
}

delayedFun(function(){
    console.log("Hello")
})

console.log(isLegal(15));


// interfaces


interface userType{
    firstName:string,
    lastName:string,
    age:number,
}

function greet1(user:userType):void{




}

// Types

type sumInput=string| number;


function fun(a:sumInput,b:sumInput):number | string{
    return a;

}

console.log(fun(120,"hello"));

// Interfaces can be used inside another interfaces

interface Address{
    city:string,
    country:string,
    pincode:number,
}


interface User{
    name:string,
    age:number,
    address:Address,
}
interface Company{
    address:Address
}


//
// creating an object using Interface
interface People{
    name:string,
    age:number,
    // greet1:()=>string,
    // greet2():string,
    
}

let person:People={
    name:"harshit",
    age:10,
    // greet1:()=>{
    //     return "hello Harshit";
    // },
    // greet2() {
    //     return "world";
    // },

}

// console.log(person.greet1());
// console.log(person.greet2());

// Implementing Interfaces as a Class
// Creating a class that implements Interface


class Manager implements People{

        name:string;
        age:number;

        constructor(name:string,age:number){
            this.name=name;
            this.age=age;   
            
        }

        


}


let user=new Manager("harshit",22);

console.log(user.name);
console.log(user.age);



// Above implementation was using implements and now will use extends

class Shape{
    constructor(a:number){

    }
    area(){
        console.log("Hi I am area !");

    }
    
}

class Rectangle extends Shape{
    width:number;
    height:number;
    
    constructor(){
        super(1);  // call the constructor of the parent class
        this.width=1;
        this.height=2;
    }

}


const r=new Rectangle();

r.area();