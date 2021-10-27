(()=>{
    let isPolindrome = function(str) {
        let A = 'A'.charCodeAt(0), Z = 'Z'.charCodeAt(0)
        if (str.length<2){
            return str
        }
        let isEqual = (c1, c2)=>{
            return c1===c2 || c1.charCodeAt(0)===(c2.charCodeAt(0)^32)
        }
        let isCharacter = (c)=>{
            return (c>=A && c<=Z) || (c>=(A^32) && c<=(Z^32))
        }
        let p1 = 0
        let p2 = str.length-1
        while (p1 < p2){
            if (!isCharacter(str[p1].charCodeAt(0))){
                p1++
                continue
            }else if (!isCharacter(str[p2].charCodeAt(0))){
                p2--
                continue
            }else if (!isEqual(str[p1], str[p2])){
                return false
            }
            p1++
            p2--
        }
        return true
    };
console.log('isPolindrome', isPolindrome('...fcFassAfC/'))
})();