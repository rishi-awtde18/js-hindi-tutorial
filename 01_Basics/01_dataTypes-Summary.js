//================Primitive (Call By Value)=================//
//There are 7 types in Javascript
//String,Number,Boolean,null,undefined,BigInt,Symbol
//e.g
const num=10;//number
let str="Rishi";//string
let isValid=true;//Boolean
let phoneNum=null;//null
let email;//undefined
let bigInt=12345678910545655n//BigInt
let uniqNum=Symbol("123");//Symbol

//Note:
//Primitive dataTypes are stored in Stack memory.
//e.g
let userName="Rishi";
let firstName=userName;//Giving only copy of userName from stack memory
firstName="Rushikesh"
console.log(firstName);

//=======================================================//
//=============Non-Primitive (Call By Reference)========//
//There are 3 types in Javascript.
//Array, Object, Functions
//e.g
let arr = ["Rishi","Mangala","Gajanan","Awatade"];//Array

//Object
let myObj={
    firstName:"Rishi",
    lastName: "Awatade",
    age:28,
}
//--

//Functions
let myFun=function()
{
    return 0;
}
//--

//Note:
//Non-Primitive dataTypes are stored in Heap memory.
//e.g
let newObj=myObj;
newObj.firstName="Rushikesh";//Direct change to the object which is located in Heap Memory.
console.log(myObj);

//====================================================================//


