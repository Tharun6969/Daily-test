// 1. Sum of elements in an array [1, 2, 3, 4, 5] Ans: 15

const a=[1,2,3,4,5]
function sum(array){
    var sum=0
    for (let i=0;i<array.length;i++){
        sum=sum+array[i]
    }
    console.log(sum)

}








sum(a);
