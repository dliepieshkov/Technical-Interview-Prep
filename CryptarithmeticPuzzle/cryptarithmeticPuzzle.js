let cryptarithmeticPuzzle = (words)=>{
    let set = new Set()
    for (let i = 0; i < words[0].length; i++){
        if (!set.has(words[0][i])) {
            set.add(words[0][i])
        }
    }
    for (let i = 0; i < words[1].length; i++){
        if (!set.has(words[1][i])) {
            set.add(words[1][i])
        }
    }
    for (let i = 0; i < words[1].length; i++){
        if (!set.has(words[1][i])) {
            set.add(words[1][i])
        }
    }
    if (set.size > 10) {
        return "No solutions!"
    }

    let solved = false
    let solve = (unqSet, values, visited, words)=> {
        if (set.size === values.size) {
            let map = {}
            for (let i = 0; i < unqSet.length; i++) {
                let letter = unqSet[i], val = values[i]
                map[letter] = `${val}`
            }
            console.log(map)
            return map
            if (map[words[0][0]] === '0' ||
                map[words[1][0]] === '0' ||
                map[words[2][0]] === '0') {
                return '0'
            }

            let word1 = '', word2 = '', res = ''
            for (let i=0; i < words[0].length; i++)
                word1 += map[words[0][i]]
            for (let i=0; i < words[1].length; i++)
                word2 += map[words[1][i]]
            for (let i=0; i < words[2].length; i++)
                res += map[words[2][i]]

            if (1*word1 + 1*word2 === 1*res) {
                console.log([word1, word2, res])
                solved = true
                return [word1, word2, res]
            }

            return 'NA'
        }
        for (let i = 0; i < 3; i++) {
            if (!visited[i]) {
                visited[i] = true
                values.push(i)
                solve(unqSet, values, visited, words)
                values.pop()
                visited[i] = false
            }
        }
        return solved
    }
    return solve(set, [], new Array(10).fill(false), words)
}
//console.log(cryptarithmeticPuzzle(['SEND', 'MORE', 'MONEY']))