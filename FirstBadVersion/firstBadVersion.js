//version control The isBadVersion API is defined
function firstBadVersion(n){
    let l = 0
    let r = n

    let isBadVersion = ()=>1 //just for example

    while (l < r){
        let midpoint = l + Math.floor((r - l)/2)
        if (isBadVersion(midpoint)){
            r = midpoint
        }else{
            l = midpoint + 1
        }
    }
    if (l===r && isBadVersion(l)){
        return l
    }
    return -1
}