const arr = [3,2,5,8,1,9,4,5,3]

function BubbleSort (arr){
    let n =arr.length
    for (let i=1;i<=n-1;i++){
        for (let j =0; j<=i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
       
    }
    console.log(arr);
}

BubbleSort(arr);