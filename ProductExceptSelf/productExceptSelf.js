function productExceptSelf(nums, m) {
    let l = nums.length, sum = new Array(l), total = 0
    sum[0] = 1
    for (let i = 1; i < l; i++) {
        sum[i] = (nums[i - 1] * sum[i - 1])%m
    }
    let v = 1
    for (let i = l - 1; i >= 0; i--) {
        total += (sum[i] * v)
        v = v * nums[i] % m
    }
    return total % m
}
document.write( "productExceptSelf = " + productExceptSelf([1, 2, 3, 4], 12))
document.write( "productExceptSelf = " + productExceptSelf([27, 37, 47, 30, 17, 6, 20, 17, 21, 43, 5, 49, 49, 50, 20, 42, 45, 1, 22, 44], 40))
document.write( "productExceptSelf = " + productExceptSelf([28, 27, 11, 17, 19, 49, 19, 46, 41, 21, 1, 49, 18, 26, 16, 24, 16, 36, 19, 49, 31, 39, 11, 21, 29, 37, 34, 34, 6, 16, 26, 31, 6, 48, 38, 36, 26, 36, 38, 18], 5040))
document.write( "productExceptSelf = " + productExceptSelf([52, 40, 2, 78, 49, 70, 39, 26, 58, 58, 52, 93, 80, 64, 33, 72, 29, 17, 81, 83, 48, 9, 49, 82, 67, 76, 54, 64, 6, 48, 16, 82, 67, 56, 32, 98, 14, 47, 48, 26, 56, 54, 80, 13, 32, 18, 4, 73, 45, 65], 530))
