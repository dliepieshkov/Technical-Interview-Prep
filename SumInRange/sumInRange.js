function sumInRange(nums, queries) {
    let mod = 1000000007/*1e9 + 7*/, sum = [], total = 0
    sum[0] = nums[0]
    for(let i = 1; i < nums.length; i++){
        sum[i] = (sum[i-1] + nums[i])
    }
    for(let i = 0; i < queries.length; i++){
        total += sum[queries[i][1]] -
            (queries[i][0]>0?sum[queries[i][0]-1]:0)
    }
    return (total % mod + mod) % mod
}
//                     [3, 3,  1, 7,  4, 6]
console.log(sumInRange([-77, 54, -59, -94, -13, -78, -81, -38, -26, 17, -73, -88, 90, -42, -63, -36, 37, 25, -22, 4, 25, -86, -44, 88, 2, -47, -29, 71, 54, -42]
    ,
    [[2,2],
        [4,7],
        [2,4],
        [0,2],
        [3,6],
        [6,6],
        [3,3],
        [2,7],
        [3,4],
        [3,3],
        [2,9],
        [0,1],
        [4,4],
        [2,3],
        [0,6],
        [4,4],
        [2,3],
        [0,5],
        [2,5],
        [4,5]]))