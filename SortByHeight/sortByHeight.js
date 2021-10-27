function sortByHeight(a) {
    let tmp = [...a].sort((a,b)=>a-b)
    console.log(tmp)
    for(let i=a.length-1,j = a.length-1;i>=0;i--){
        if (a[i]===-1)continue
        a[i] = tmp[j--]
    }
    return a
}

//console.log(sortByHeight([-1, 150, 190,220, 170, -1, -1, 160, 120, 130,180,-1,-1,-1,200]))
//console.log(sortByHeight([2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]))
console.log(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]))