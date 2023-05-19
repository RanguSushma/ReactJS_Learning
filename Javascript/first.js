ES5
function oldVersion(){
    console.log('oldversion')
}
oldVersion()
oldversion

function oldVersion(a){
    console.log(a+40)
}
oldVersion(110)
150

ES6
const newVersion=()=>{
    console.log('newVersion');
}
newVersion();
newVersion

const newVersionn=(a,b)=>{
    console.log(a+b);
}
newVersionn(40,60);
100

// const newVersionn=a,b=>console.log(a+b);
// newVersionn(40,60);
//  Uncaught SyntaxError: Missing initializer in const declaration

const newwVersionn=a=>console.log(a+60);
newwVersionn(20);
80

const neVersionn=a=> a+60;
console.log(neVersionn(20));
// we dont need to use return, that curly braces and function braces in ES6
80

// --------------------------------------------------------

// **dispalying array elements using REST OPERATOR(...args) this assigns rest elements to automatically
// function add(...args){
//     console.log(args)
//     let sum=0;
//     for(int i=0;i<args.length;i++){
//         sum+=args[i]
//     }
//     return sum
// }
// add(1,2,5,7,8)
// [1,2,5,7,8]  ans
//---------------------------------------------

// **dispalying array elements using REST OPERATOR(...args) this assigns rest elements to automatically
// function add(a,...args){
//     console.log(args)   **a variable will asign to 1 rest of the args will assign automatically and prints rest operator only
//     let sum=0;
//     for(int i=0;i<args.length;i++){
//         sum+=args[i]
//     }
//     return sum

// }
// add(1,2,5,7,8)
//[2,5,7,8]
// ---------------------------

// var a=[1,2,3,6]
// var b=[7,8,9]
// var a=[1,2,...b,3,6] // adding two arrays using ...var(SPEAD OPERATOR)
// ----------------------------

// adding two objects using SPEAD OPERATOR
// obj1={
//     name:'sushma',
//     age:'23',
// }
// obj2={
//     ...obj1,
//     mail:"sushma@gmail.com"
// }
// console.log(obj2);
// VM2953:9 {name: 'sushma', age: '23', mail: 'sushma@gmail.com'}
// ---------------------------------------------------------------------

//destructuring objects in JS7
// values=[1,2,3]
// [a,b,r]=values
// console.log(a,b,r);
// [1,2,3]

//-----------------------------------------------
// **adding array to arguments
// function add(...args){
//     console.log(args)
//     let sum=0;
//     for(int i=0;i<args.length;i++){
//         sum+=args[i]
//     }
//     return sum

// }
// var input=[1,2,3,4,5]
// add(...input)
// -----------------------------------
// Map is used to create a new array from calling a function of  every element 
// var y=[1,2,3,4,5] 
// y.map((data)=>{return data*2})
// --------------------------------------
// Filter is used to filter teh data
// var u=[5,10,15,20]
// u.filter((data) =>{return data>10})
// (2) [15, 20]
// --------------------------------------
