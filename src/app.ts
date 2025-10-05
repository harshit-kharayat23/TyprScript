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