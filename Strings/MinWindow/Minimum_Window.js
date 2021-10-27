function Minimum_Window(s, t)
{
    let m = new Array(256).fill(false)
    let min = Number.MAX_VALUE
    let start = -1
    let count = 0
    let windowChars = []
    for(let i = 0; i < t.length; i++){
        if (m[t[i].charCodeAt(0)]===false)m[t[i].charCodeAt(0)]=1
        else m[t[i].charCodeAt(0)]++
        count++
    }
    let i = 0
    for(let i = 0; i < s.length; i++) {
        if (m[s[i].charCodeAt(0)]===false) continue
        m[s[i].charCodeAt(0)]--
        windowChars.push(i)
        if (m[s[i].charCodeAt(0)]===0) count--
        if (count===0) {
            while (windowChars.length>0 && m[s[windowChars[0]].charCodeAt(0)]<0) {
                m[s[windowChars.shift()].charCodeAt(0)]++
            }
            if (min > windowChars[windowChars.length - 1] - windowChars[0]) {
                min = windowChars[windowChars.length - 1] - windowChars[0]
                start = windowChars[0]
                if (min===t.length){
                    break
                }
            }
        }

    }
    if (min===Number.MAX_VALUE) return ''
    return s.substring(start, start + min+1)
}

// Driver code
let s = "sCCCCAAACCxxxxCABDOBBECODEBABABNCzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzmBACzzzCjjmszz";
let t = "smC";
document.write("-->Smallest window that " +
    "contain all character : <br>");
document.write(Minimum_Window(
    s, t));