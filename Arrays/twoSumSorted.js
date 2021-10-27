(()=>{
    let twoSumSorted = function(nums, target) { //sorted array
        let p1 = 0
        let p2 = nums.length - 1
        let sum = 0
        while (p1 <= p2){
            sum = nums[p1] + nums[p2]
            if (sum>target){
                p2--
            }else if(sum<target){
                p1++
            }else{
                return [p1, p2]
            }
        }
        return [p2,p1]
    };
console.log('twoSum', twoSumSorted([1,3,4,5,6,7,8,9],13))
})();