var reverse = function(x) {
    let negative = x<0?-1:1, t = false, max = Math.pow(2,31)
    x = (Math.abs(x)).toString().split("")
    if (x.length<1){
        return 'na'
    }
    for (let i=0; i<Math.floor(x.length/2); i++){
        t = x[i]
        x[i] = x[x.length-1 - i]
        x[x.length - 1 - i] = t
    }
    console.log(1 * (x.slice(0, x.length - 1).join('') + '.' + x.slice(-1).join('')),max / 10)
    if ( 1 * (x.slice(0, x.length - 1).join('') + '.' + x.slice(-1).join('')) > max / 10 - (negative===1? 1 : 0) ) {
        return 0
    }
    return negative * x.join('')
};
console.log('result',reverse(1463847412))