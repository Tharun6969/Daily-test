// 2. Print unique values from an array
// [1, 2, 3, 3, 4, 5, 5]
// Ans: [ 1, 2, 3, 4, 5 ]
  
const user=[1, 2, 3, 3, 4, 5, 5]


function unique(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]===arr[i+1]){
            arr.splice(i,1)
        }
    }
    console.log(arr)
} 
unique(user)