const firstName="Rishi";
let age='27';

//=========Use String InterPollution==============//
let str1=`my name is ${firstName.toUpperCase()} and my age is ${age}`;
//console.log(str1); //OUTPUT: my name is RISHI and my age is 27
//================================================//

//one more way to declare string.
const str2=new String("RUSHIKESH");

//console.log(str2.charAt(4)); //Output: I 
//console.log(str2.indexOf('K'));//Output:5
//console.log(str2.substring(0,5));//Output: RUSHI

//console.log(str2.slice(-8,7));//Output: USHIK

//console.log(str2.split('S'));//return an array. Output: ['RU','HIKE','H']

const emailID =' rushikeshawatade07@gmail.com ';

//console.log(emailID.trim());//remove spaces from string. Output: rushikeshawatade07@gmail.com
console.log(emailID.replace('gmail','yahoo'));//OUTPUT: rushikeshawatade07@yahoo.com






