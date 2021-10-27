function binarySearch(nums, target){
    if (nums.length===0)return -1
    let l = 0
    let r = nums.length - 1
    while (l <= r){
        let midpoint = l + Math.floor((r - l)/2)
        if (nums[midpoint]===target){
            return midpoint
        }else if (nums[midpoint] > target){
            r = midpoint - 1
        }else{
            l = midpoint + 1
        }
    }
    return -1
}
(()=>{
    let a = [1,2,3,4,7,9,10,11]
    console.log('binarySearch', a[binarySearch(a,12)])
})();