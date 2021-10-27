var characterReplacement = function(s, k) {
    if (!s || s.length === 0) return 0
    let map = [], res = 0, chr_max = 0, left = 0
    for(let i = 0; i < s.length; i++) {
        let chr = s.charAt(i)
        map[chr] = 1 + (map[chr] ? map[chr] :  0)
        chr_max = Math.max(chr_max, map[chr])
        if (i - left - k  + 1 > chr_max) {
            map[s.charAt(left)]--
            left++
        }else {
            res = Math.max(res, i - left + 1)
        }
    }

    return res
};