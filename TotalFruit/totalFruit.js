var totalFruit = function(fruits) {
    let c = [{},0,{},0], maxFruits = 0
    for (let i = 0; i < fruits.length; i++) {
        let fruit = fruits[i]
        if (c[1] === 0 ||
            fruit in c[0]
        ) {
            c[0][fruits[i]] = i
            c[1]++
        } else if (
            c[3] === 0 ||
            fruit in c[2]
        ) {
            c[2][fruits[i]] = i
            c[3]++
        }
        if (c[1] + c[3] > maxFruits) {
            maxFruits = c[1] + c[3]
        }
        if (!(fruit in c[0]) && !(fruit in c[2])) {
            let b = fruits[i - 1] in c[0] ? 2 : 0
            let o = Object.keys(c[b])[0]
            c[b === 2 ? 1 : 3] = i - c[b][o] - 1
            c[b] = {}
            c[b][fruits[i]] = i
            c[b + 1] = 1
        }
    }
    return maxFruits
}