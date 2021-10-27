var findMedianSortedArrays = function(nums1, nums2) {
    let l = nums1.length + nums2.length
    let m = Math.floor(l/2)-1
    if (l===0){
        return null
    }else if(nums1.length===0){
        if (l%2===0) return (nums2[m]+nums2[m+1])/2
        return nums2[m+1]
    }else if(nums2.length===0){
        if (l%2===0) return (nums1[m]+nums1[m+1])/2
        return nums1[m+1]
    }
    if (l%2===0){
        return (sorted[m]+sorted[m+1])/2
    }
    return sorted[m+1]
};