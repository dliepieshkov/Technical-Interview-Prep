(()=>{
    var twoSum = function(nums, target) { //not sorted array
        let map = {}, s = 0
        for (let i = 0; i < nums.length; i++) map[nums[i]] = i
        for (let i = 0; i < nums.length; i++){
            s = target - nums[i]
            if (s in map && map[s] != i){
                return [i, map[s]]
            }
        }
    };
})();