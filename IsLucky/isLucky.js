function isLucky(n) {
    n = n.toString()
    let m = Math.floor(n.length/2), sum=0
    for(let i = 0; i<m; i++){
        console.log(n.length,m,i,sum, n[i], n[n.length-i-1])
        sum += n[i]-n[n.length-i-1]
    }
    return sum===0
}
console.log(isLucky(239017))