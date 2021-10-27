(()=> {
    let riverSizes = (matrix) => {
    let result = []
    const island = (i, j) => {
    if (
        i >= 0 &&
j >= 0 &&
i < matrix.length &&
j < matrix[i].length &&
matrix[i][j] === 1
) {
    matrix[i][j] = 0;
    return island(i + 1, j) + island(i, j + 1) + island(i - 1, j) + island(i, j - 1) + 1
}
return 0
}

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 1) {
            result.push(island(i, j))
        }
    }
}
return result
}
console.log('riverSizes 1', riverSizes([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1]
]))//[1,2,2,2,5]
console.log('riverSizes', riverSizes([
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
]))//[1,2,2,2,5]
console.log('riverSizes', riverSizes(
    [
        [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
        [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
        [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
        [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1]
    ]
))//[2, 1, 21, 5, 2, 1]
})();