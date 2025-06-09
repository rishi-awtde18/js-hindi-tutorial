const myArr= [12,13,14,15,16];
//console.log(myArr[2]);

//Stored all datatypes in a single array
//const myNewArr = new Array(10,"Rishi",false); 

//const myArr1=[12,45,"Rishi",false];
//console.log(myArr1[2]);
//--

//Arrays Methods

//myArr.push(6);//put the value on last index of the array. OUTPUT : [ 12, 13, 14, 15, 16, 6 ]

//myArr.pop();// Remove the last index value from array. OUTPUT: [ 12, 13, 14, 15 ]

//myArr.unshift(9);//Add the value on first index of the array. OUTPUT: [ 9, 12, 13, 14, 15, 16 ]

//myArr.shift();//Remove the first index value from array. OUTPUT : [ 13, 14, 15, 16 ]
//console.log(myArr);

//console.log(myArr.includes(13));// return bool type either true or false.

//console.log(myArr.indexOf(15,0));//return value index position OUTPUT : 3

/*Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@param start — The zero-based location in the array from which to start removing elements.
@param deleteCount — The number of elements to remove.
@returns — An array containing the elements that were deleted.*/
//myArr.splice(1,3); // remove the array value for specific range from array. OUTPUT: [ 12, 16 ]

/*The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. 
For example, -2 refers to the second to last element of the array.*/
myArr.slice(-2,5);
console.log(myArr.slice(-2,5));// Slice method doesn't consider last index value. OUTPUT: [ 15, 16 ]
