// finds two elements in an array that add to a specific number
// arr= [1,2,3,4,5]  target=9  two elements are= 4,5

function findSum(arr, target){
  for(let i=0; i<arr.length;i++){
    for(let j=i+1; j<arr.length;j++){
        if(arr[i]+arr[j]===target){
            return [i,j];
        }
   }
 }
 return -1;
}