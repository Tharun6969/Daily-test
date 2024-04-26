// 3.Write a JavaScript function that takes an array of numbers
//  and returns a new array with multiple of two

// Question : [1,2,3,4]
// Answer: [2,4,6,8]

const a=[1,2,3,4]
function multipleOftwo(array){
    for(let i=0;i<array.length;i++){
        array[i]=array[i]*2
    }
    console.log(array);
 
}
multipleOftwo(a)