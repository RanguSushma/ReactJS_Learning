// **dispalying array elements using rest arguments
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
// ---------------------------
// var a=[1,2,3,6]
// var b=[7,8,9]
// var a=[1,2,...b,3,6] // adding two arrays using ...var
// ----------------------------
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