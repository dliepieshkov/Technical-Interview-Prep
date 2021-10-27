(()=>{
    let reverseString = function(arr) {
        if (arr.length<2){
            return arr
        }
        let p1 = 0
        let p2 = arr.length
        while (p1<p2){
            let t = arr[p1]
            arr[p1] = arr[p2]
            arr[p2] = t
            p1++
            p2--
        }
        return arr
    };
console.log('reverseString', reverseString(["H","e","l","l","o"]))
})();