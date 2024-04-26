// ⁠Write a JavaScript function that takes an array of numbers
//  and returns a new array with only the even numbers. 
const  a=[1,2,3,4,5,6,7,8,9,10]
function even(a){
    var ans=[]
    for (let i=0 ;i<a.length;i++){
        if(a[i] % 2 ==0){
            ans.push(a[i]);
        }
    }
    console.log(ans);
}
even(a);
