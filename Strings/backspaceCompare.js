//compare two strings # symbol means backspace AA#c = Ac
function backspaceCompare(s1,s2){
    let p1=s1.length-1, p2=s2.length-1
    let skip1 = 0, skip2 = 0
    while (p1>=0 || p2>=0){
        while(p1 >= 0){
            if (s1[p1]==='#'){//need to check every character because it could have combinations like AAA### or 'A#A#A#'
                skip1++
                p1--
            }else if(skip1>0){
                skip1--
                p1--
            }else{
                break
            }
        }
        while(p2 >= 0){
            if (s2[p2]==='#'){//need to check every character because it could have combinations like #AAA### or '###A#A#A#'
                skip2++
                p2--
            }else if(skip2>0){
                skip2--
                p2--
            }else{
                break
            }
        }
        if (p1>=0 && p2>=0 && s1[p1]!==s2[p2]){
            return false
        }
        if ((p1>=0) != (p2>=0)){
            return false
        }
        p1--
        p2--
    }
    return true
}
(()=>{
    console.log('backspaceCompare', backspaceCompare('zaa##c','zF#f#c'))
})();