(()=>{
    /*
    QUICK SORT
    Quick Sort algorithm follows Divide and Conquer approach.
    It divides elements into smaller parts based on some condition and performing
    the sort operations on those divided smaller parts.
    */
    function sortParts(items, l, r) {
    var mid = items[Math.floor((r + l)/2)]
    while (l <= r) {
        while (items[l] < mid) l++
        while (items[r] > mid) r--
        if (l <= r) {
            let t = items[l]
            items[l] = items[r]
            items[r] = t
            l++
            r--
        }
    }
    return l
}

function quickSort(arr, l, r) {
    if (arr.length < 2) return arr
    let i = sortParts(arr, l, r)
    if (l < i - 1) {
        quickSort(arr, l, i - 1);
    }
    if (i < r) {
        quickSort(arr, i, r);
    }
    return arr
}
var sortedArray = quickSort([5,3,7,6,2,9], 0, arr.length - 1);
console.log(sortedArray);
})();