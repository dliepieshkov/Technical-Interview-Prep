var findTriplets = (nums) => {
    nums.sort(function(a, b){return a - b});
    let res = [], n = nums.length

    for (let i = 0; i < n - 2; i++){
        if (i == 0 || nums[i] > nums[i - 1])
        {
            let left = i + 1;
            let right = n - 1;
            let target = 0 - nums[i];
            while (left < right)
            {
                if (left > i + 1
                    && nums[left] == nums[left - 1])
                {
                    left++;
                    continue;
                }
                if (right < n - 1
                    && nums[right] == nums[right + 1])
                {
                    right--;
                    continue;
                }

                if (0 == nums[left] + nums[right])
                {
                    res[res.length] = [nums[left], nums[i], nums[right]]
                    left++;
                    right--;
                }
                else if (target > (nums[left] + nums[right]))
                {
                    left++;
                }
                else {
                    right--;
                }
            }
        }
    }
    return res
}