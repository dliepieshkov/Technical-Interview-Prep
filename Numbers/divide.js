var divide = function(dividend, divisor) {
    let negative = Math.min(dividend, divisor) < 0 && (divisor>0 || dividend>0)
    let res = 0, max = Math.pow(2,31)
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    if (divisor>1)
        while(dividend>=divisor){
            dividend-=divisor
            res++
        }
    else res = dividend
    if(!negative && res >= max-1) return max - 1
    else if(negative && res >= max) return -1 * max
    return negative?-res: res
};

var divideII = function(dividend, divisor) {
    let negative = Math.min(dividend, divisor) < 0 && (divisor>0 || dividend>0)
    let res = 0
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    let multiplyBy10 = (num, ntimes)=>{
        return parseInt(`${num}` + '0'.repeat(ntimes))
    }
    if (divisor>1){
        let base10diff = Math.floor(Math.log10(dividend)) - Math.floor(Math.log10(divisor))
        for(let i = 0; i <= base10diff; i++){
            let p = multiplyBy10(divisor, base10diff-i)
            while(dividend>=p){
                dividend -= p
                res+=multiplyBy10(1, base10diff-i)
            }
        }
    }else{
        res = dividend
    }

    if(!negative && res > (~(1<<31))) return (~(1<<31))
    else if(negative && -res < (1<<31)) return (1<<31)
    return negative?-res: res
};

var divideWithPartitioning = function(dividend, divisor) {
    let negative = Math.min(dividend, divisor) < 0 && (divisor>0 || dividend>0)
    let res = 0, max = Math.pow(2,31)
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    if (divisor>1){
        let ddLen = Math.floor(Math.log10(dividend))+1
        let drLen = Math.floor(Math.log10(divisor))+1
        let zeros = ddLen - drLen
        for(let i = 0; i <= zeros; i++){
            let p = parseInt(`${divisor}`+'0'.repeat(zeros-i), 10)
            while(dividend>=p){
                dividend -= p
                res+=parseInt('1'+'0'.repeat(zeros-i), 10)
            }
        }
    }else{
        res = dividend
    }
    if(!negative && res >= max-1) return max - 1
    else if(negative && res >= max) return - max
    return negative?-res: res
};