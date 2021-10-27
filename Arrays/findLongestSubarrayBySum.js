function findLongestSubarrayBySum(s, arr) {
    let map = new Map(), sum = 0, maxLen = 0, maxIdx = -1
    if (arr.length===1){
        if (arr[0]===s)return [s, s]
        return [-1]
    }
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (!map.has(sum)) map.set(sum, i)
        if (sum === s) {
            maxIdx = maxLen = i + 1
        }
        if (map.has(sum - s) && i - map.get(sum - s) > maxLen) {
            maxLen = Math.max(maxLen,i - map.get(sum - s))
            maxIdx = i + 1
        }
    }
    return maxIdx===-1?[-1]:[maxIdx - maxLen + 1, maxIdx]
}
// Driver Code
var arr = [1, 2, 3, 7, 5];
var k = 12;
document.write( "Length = " + findLongestSubarrayBySum(k,arr).join(','));