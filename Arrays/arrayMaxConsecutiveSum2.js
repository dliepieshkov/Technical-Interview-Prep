/*
Given an array of integers, find the maximum possible sum you can get from one of its contiguous subarrays.
The subarray from which this sum comes must contain at least 1 element.

Example

For inputArray = [-2, 2, 5, -11, 6], the output should be
arrayMaxConsecutiveSum2(inputArray) = 7.

The contiguous subarray that gives the maximum possible sum is [2, 5], with a sum of 7.
*/
function arrayMaxConsecutiveSum2(inputArray) {
    console.log(inputArray)
    let curr = inputArray[0]
    let max = inputArray[0]
    for (let i=1;i<inputArray.length;i++) {
        curr = Math.max(curr + inputArray[i], inputArray[i])
        max = Math.max(curr, max)
        console.log(curr,max)
    }
    return max
}
arrayMaxConsecutiveSum2([-2, 2, 5, -11, 6])