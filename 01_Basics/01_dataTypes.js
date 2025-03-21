let nickName="Rishi";
let age=27;
let isLogin=true;
let address=null;
let emailID;

 let arr = [nickName,age,isLogin,address,emailID];
 
 arr.forEach(element => {
    console.table(typeof element);
});