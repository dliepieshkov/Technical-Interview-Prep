(()=>{
    var threeSum = function(nums) {
        nums.sort((a,b)=>a-b)
        let res = [],l,h
        if (nums.length<3)return res

        for (let i = 0;i < nums.length && nums[i] <= 0; ++i){
            if (i > 0 && nums[i - 1] === nums[i])continue
            let l = i + 1
            let h = nums.length-1
            while (l < h){
                let s = nums[i] + nums[l] + nums[h]
                if(s > 0)h--
                else if(s < 0) l++
                else{
                    res.push([nums[i], nums[l++], nums[h--]])
                    while(l < h && nums[i] === nums[l])l++
                }
            }
        }
        return res
    };
})();