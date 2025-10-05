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
interface User{
    firstName:string,
    lastName:string,
    age:number,
}


function filterUser(users:User[]){ 

    return users.filter((user)=>user.age>=18)

}

const filteredUser=filterUser([{
    firstName:"harshit",
    lastName:"Kharayat",
    age:12

}])

console.log(filteredUser);
