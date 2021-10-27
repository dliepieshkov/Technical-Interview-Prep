function toLowerCase(str){
    let result = str.split(''), A = 'A'.charCodeAt(0), Z = 'Z'.charCodeAt(0)
    for(let i=0;i<result.length;i++){
        let cc = result[i].charCodeAt(0)
        if (cc>=A && cc<=Z)result[i] = String.fromCharCode(cc + 32)
    }
    return result.join('')
}
(()=>{
    console.log('toLowerCase', toLowerCase('A Hello World Z 124'))
})();