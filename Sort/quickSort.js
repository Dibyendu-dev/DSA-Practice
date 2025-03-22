let arr =[3,8,6,2,5,1,9,3,4,17,1,71]
let low= 0;
let high = arr.length -1
console.log(arr);
quickSort(arr,low,high);
console.log(arr)


function quickSort(arr,low,high){
    if(low<high) {
    let pIndex = partitionIndex(arr,low,high)
    quickSort(arr,low,pIndex-1);
    quickSort(arr,pIndex+1,high);
    }
    
}

function partitionIndex(arr,low,high){
    let pivot = arr[low];
    let i=low;
    let j=high;

    while(i<j){
        while(arr[i]<=pivot && i<=high-1){
            i++;
        }
        while(arr[j]>pivot && j>=low+1){
            j--;
        }

        if(i<j){
            // swap(arr[i],arr[j])
            let temp =arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }

     // Swap pivot element with arr[j]
     [arr[low], arr[j]] = [arr[j], arr[low]];

     return j; // Return the correct partition index
   
}

