// insertion sort
const arr = [5,7,9,2,6,4,8,3,1];
let n = arr.length;

function InsertionSort (arr){
    for(let i=0; i<=n-1 ;i++){
        let j=i;
        while(j>0 && arr[j-1] > arr[j]){
            let temp= arr[j-1];
            arr[j-1]= arr[j];
            arr[j]= temp;
            j--;
        }
    }
    console.log(arr)
}

InsertionSort(arr)