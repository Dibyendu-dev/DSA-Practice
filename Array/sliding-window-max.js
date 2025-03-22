let nums =[1,3,-1,-3,5,3,6,7]
let k=3

function sWindow(nums,k){
    let result = []
    let n= nums.length
    for(let i=0 ;i<=n-k;i++){
        let max = nums[i];
        for(let j=1;j<k;j++){
            if(nums[i+j]>max){
                max = nums[j+i]
            }
        }
        result.push(max);
    }
    return result
}
console.log(sWindow(nums,k));