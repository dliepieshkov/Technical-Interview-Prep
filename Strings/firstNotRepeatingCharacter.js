function firstNotRepeatingCharacter(s) {
    let n = new Set(), u = new Set()
    for (let i = 0; i < s.length; i++){
        if (n.has(s[i]))continue
        else if (u.has(s[i])){
            n.add(s[i])
            u.delete(s[i])
        }else{
            u.add(s[i])
            console.log(u.values())
        }
    }
    console.log(u.size, u.values().next().value)
    if (u.size > 0)return u.values().next().value
    return 'ss_'
}
document.write("-->firstNotRepeatingCharacter : <br>");
document.write(firstNotRepeatingCharacter('aabbccjff'));