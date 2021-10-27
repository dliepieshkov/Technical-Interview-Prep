var licenseKeyFormatting = function(s, k) {
    let res = [],group='', amountOfExtraDashes = 0
    for(let i = s.length-1;i>=0;i--){
        if (s[i]!=='-'){
            let c = s[i].charCodeAt(0)
            group = String.fromCharCode(c >= 97 && c <= 122 ? c - 32 : c) + group
        }
        if (group.length === k || i === 0 && group!==''){
            res.push(group)
            group = ''
        }
    }
    res.reverse()
    return res.join('-')
}