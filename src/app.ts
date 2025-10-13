// //interface extends

// interface User{
//     name:string,
//     email:string,
//     phone:number,
//     gender?:string,


// }
// interface Admin extends User{
//     admin?:boolean;
// }

// const obj1={
//     name:"Harshit",
//     email:"harshit@gmail.com",
//     phone:8191095166

// }


// function getUserData(obj:Admin):void{



// }

// getUserData(obj1)

// // Type Alias

// type value=number|string|null;
// let a:value

// a=null;
// a=10;

// type arg=string|number

// function abcd(obj:arg){}

// let name:string="harshit";
// function greet(name:string){
//     console.log("Hello "+name);
// }

// greet(name);


// function isLegal(age:number):boolean{
//     if(age>=18){
//         return true;
//     }
//     else {
//         return false;
//     }

// }
// function delayedFun(fn:()=>void){
//     setTimeout(fn,1000);
// }

// delayedFun(function(){
//     console.log("Hello")
// })

// console.log(isLegal(15));


// // interfaces


// interface userType{
//     firstName:string,
//     lastName:string,
//     age:number,
// }

// function greet1(user:userType):void{




// }

// // Types

// type sumInput=string| number;


// function fun(a:sumInput,b:sumInput):number | string{
//     return a;

// }

// console.log(fun(120,"hello"));

// // Interfaces can be used inside another interfaces

// interface Address{
//     city:string,
//     country:string,
//     pincode:number,
// }


// interface User{
//     name:string,
//     age:number,
//     address:Address,
// }
// interface Company{
//     address:Address
// }


// //
// // creating an object using Interface
// interface People{
//     name:string,
//     age:number,
//     // greet1:()=>string,
//     // greet2():string,
    
// }

// let person:People={
//     name:"harshit",
//     age:10,
//     // greet1:()=>{
//     //     return "hello Harshit";
//     // },
//     // greet2() {
//     //     return "world";
//     // },

// }

// // console.log(person.greet1());
// // console.log(person.greet2());

// // Implementing Interfaces as a Class
// // Creating a class that implements Interface


// class Manager implements People{

//         name:string;
//         age:number;

//         constructor(name:string,age:number){
//             this.name=name;
//             this.age=age;   
            
//         }

        


// }


// let user=new Manager("harshit",22);

// console.log(user.name);
// console.log(user.age);



// // Above implementation was using implements and now will use extends

// class Shape{
//     constructor(a:number){

//     }
//     area(){
//         console.log("Hi I am area !");

//     }
    
// }

// class Rectangle extends Shape{
//     width:number;
//     height:number;
    
//     constructor(){
//         super(1);  // call the constructor of the parent class
//         this.width=1;
//         this.height=2;
//     }

// }


// const r=new Rectangle();

// r.area();


// // One key difference between Interfaces and Types is that we can implement interfaces as class
// // types let you do unions and intersections


// /// Abract vs interfaces


// abstract class User{
//     name:string;

//     constructor(name:string){
//         this.name=name;
//     }
//     abstract greet():string;

// }

// class Emp extends User{
//     name:string;

//     constructor(name:string){
//         super(name);
//         this.name=name;

//     }

//     greet(){
//         return "hi"+this.name;
//     }

// }

// // abstract class can have default implementaions but interface cannot



// // Create a function that takes either a User  or Admin as input and ,return saying Welcome [name]

// interface Admin{
//     name:string,
//     permissions:string,
// }

// interface User{

//     name:string,
//     age:number
// }


// type UserOrAdmin=User| Admin;

// function greeting(user:UserOrAdmin):string{

//         return "Welcome"+user.name;

// }


// // Arrays


// // function to return the maximum integer in the array


// // function getMax(nums:number[]):number{

// //     let maxi=-Infinity;
// //     for(let i=0;i<nums.length;i++){
// //         if(nums[i]>maxi){
// //             maxi=nums[i];
// //         }

        
// //     }
// //     return maxi;

// // }

// function getMax(nums: number[]): number {
//     let maxi = -1000000; // Initialize with a very small number
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > maxi) {
//             maxi = nums[i]; // Update maxi when a bigger number is found
//         }
//     }
//     return maxi;
// }


// getMax([10,20,30]);

// interface Address {
//   city: string;
//   pincode: number;
// }

// interface User {
//   name: string;
//   age: number;
//   addresses: Address[];
// }

// let user1: User = {
//   name: "harshit",
//   age: 21,
//   addresses: [
//     {
//       pincode: 262501,
//       city: "pithoragarh",
//     },
//   ],
// };

// console.log(user1);


// take Users array as input and filter out the users with age above 18
// interface User{
//     firstName:string,
//     lastName:string,
//     age:number,
// }


// function filterUser(users:User[]){ 

//     return users.filter((user)=>user.age>=18)

// }

// const filteredUser=filterUser([{
//     firstName:"harshit",
//     lastName:"Kharayat",
//     age:12

// }])

// console.log(filteredUser);


/* Getting Started with classes and objects */

// class Music{

//     constructor(public name:string,public artist :string, public thumbnail :string){



//     }


// }


// const album1=new Music("lets do it","Harshit","hi.jpg");

// console.log(album1);





// class BottleMaker{

//     constructor(public name:string){

//     }

// }
// class MetalBottelMaker extends BottleMaker{

   
//     constructor(name:string){
//         super(name);
//     }
//     getValue(){
//         console.log(this.name);
//     }

// }

// let b1=new MetalBottelMaker("milton");
// b1.getValue();



// class BottleMaker{

//         public name="Milton";

// }

// class MetalBottelMaker extends BottleMaker{

//         public material="Metal"; 



// }

// let b1=new MetalBottelMaker();
// console.log(b1);

// // readonly will not allow to change the name variable
// // class User{
// //     constructor(public name:string){

// //     }

// //     changeName(){
// //         this.name="hellow";
// //     }

// // }

// // let u1=new User("Harsh");
// // console.log(u1);
// // u1.changeName();
// // console.log(u1);


// // Getter and setter using get and set


// class User{

//     constructor(public _name:string,public _age:number){

//     }

//     get name(){
//         return this._name
//     }

//     set name(value:string){
//         this._name=value;
//     }
//     get age(){
//         return this._age;
//     }

//     set age(value:number){
//         this._age=value;
//     }

// }

// let u1=new User("harshit",12);
// console.log(u1);

// console.log(u1.name);
// u1.name="Anjali"
// console.log(u1);

// console.log(u1.age);

// console.log(u1);
// u1.age=21;
// console.log(u1);

// // about Static members

// class Harry{
//     static version=69.9;

//     static getRandomNumber(){
//         return Math.random();
//     }

// }

// console.log(Harry.version);
// console.log(Harry.getRandomNumber());

// // we can acces version without using new keyword or creating any objects



// Function in Typscript


// function abcdef(name:string,age:number,cb:(value:string)=>void){
//     cb("hello Harshit");
// }


// abcdef("harshit",22,(value:string)=>{
//     console.log(value) 
// })

// // Optional and default Parameters

// // option paramater using ?
// function toji(name:string,age:number,gender?:string){
//     console.log(name,age,gender);
// }

// toji("Harshit",22,"Male");
// toji("Anjali",20);

// // default parameter 
// function abc(name:string,age:number,gender:string="does not prefer to say"){
//     console.log(name,age,gender);
// }
// abc("Harsh",22,"Male");
// abc("Anjali",20);

// // rest parameters

// // rest / spread operator ...


// function sum(...arr:number[]){
//     console.log(arr);
// }
// function friends(...args:string[]){

//     console.log(args);

// }


// sum(1,2,3,4,5,6,7);
// friends("Harshit","Harsh","Tanay","Aditya","Divyanshu");

// // spread operator copies value to another 

// let arr1=[1,2,3,4];

// let arr2=[...arr1];
// console.log(arr2);


// function overloading

// we need write the signature first in typescript

// function abcd(a:string):void;

// function abcd(a:string,b:number):void;


// function abcd(a:any,b?:any){

//     if(typeof a=="string" && b===undefined){
//             console.log("first function");
//     }
//     else if(typeof a=="string" && typeof b=="number"){
//             console.log("second function");
//     }   
//     else {
//         throw new Error("Something went wrong!");
//     }
    

// }

// abcd("hey");
// abcd("hello",2);




// Generics


// ak function use karte wqt we can tell how will function treate the function argumnet 

// T-> template we can use other variables as well 

function abcd<T>(a:T){
    console.log(a);
}

abcd<number>(12);
abcd<string>("Harsh");


function abcdef<H>(a:H,b:string,c:number){
    console.log(a," ",b, " ",c);
}

abcdef<string>("Halwa","Puri",4);



// Use case

// instead of using console.log() will make a generic function


function log<T>(a:T){
        console.log(a);
}

log<string>("hey");
log<number>(12);

log(12.5); // during call no need to  write the  log<float>(12.5)

// Generic Interfaces


interface Halwa<T>{
    name:string,
    age:number,
    key:T,

}

function abcdefg(obj:Halwa<string>){
    console.log(obj);
    log(obj.key);
}

abcdefg({name:"Harshit",age:21,key:"qwertyuiop"});



// Generic Classes


class BottleMaker <T>{

    constructor(public key:T){

    }


}

let b1=new BottleMaker("hi");
let b2=new BottleMaker(21);
log(b1);
log(b2);




// Modules in Tyescript


// type assertion 



// (a as string).
// a as number
// (<number>a).


// // type casting

// let a=Number("harshit");

// log(typeof a);


// // Non- null  assertion  operator

 
// let aa:string | null | undefined
// aa="harshit";
// // aa!   ! we use this if we are 100 % sure that it will not be undefined or null 




// Type Guards  also refer to as type narrowing


function xyz(arg:string |number | any){

    // type narrowing: using this if I do arg. then we will be able to get all methods for string and number

    if(typeof arg =="string"){
        return "string";
    }
    else if(typeof arg =="number"){
        return "number";
    }
    else{
        throw new Error("something went wrong!");
    }



}

log(xyz("harsh"));
log(xyz(21));
log(xyz(true));


// now we can do the same using instance of 


class TvRemote{

    switchTvOff(){
        console.log("Switching of Tv");
    }



}

class CarRemote{
    switchCarOff(){
        console.log("Switching of Car")
    }
}


let tv=new TvRemote();
let car=new CarRemote();


function switchOffKaro(arg:TvRemote|CarRemote){

    if(arg instanceof TvRemote){

    }

}


//  Will learn about advanced apis of Typescript

interface User1{
    name:string,
    age:number
}

function sumAge(user1:User1,user2:User1):number{
    return user1.age+user2.age;
}

const age=sumAge({name:"Harshit",age:21},{name:"Anjali",age:20});

console.log(age);


// Pick : picking some properties from the interface helps in reducing the complexity of function parameters 
// Partial: make all properties of a type optional ,creating with the type of the same properties 

interface User{
    name:string,
    age:number,
    email:string,
    phone:number,

}
type UpdateProps=Pick<User,'name' | 'email' | 'age'>
type UpdatePropsOptional=Partial<UpdateProps>

function updateUser(updateProps:UpdatePropsOptional){



}

// Readonly:

type Obj={
    readonly name:"Harshit",
    age:25,
    country:'USA'



}

const obj:Obj={
    name:"Harshit",
    age:25,
    country:'USA'
}


// but I want that I cannot change the name so for this readonly comes into play 
// if we want to enforce all the inner values to be constant then we will use readonly



// Records and maps

// records are used in typscript and maps are in general the map used in javascript

