function sudoku2(grid) {
    let s33 = new Array(grid.length)
    let r = new Array(grid.length)
    let c = new Array(grid.length)
    for(let i = 0; i < s33.length; i++){
        s33[i] = new Set()
        r[i] = new Set()
        c[i] = new Set()
    }
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid.length; j++){
            if (grid[i][j]==='.')continue
            let i33 = Math.floor(i/3) + Math.floor(j/3) * 3
            if (s33[i33].has(grid[i][j]) || r[i].has(grid[i][j]) || c[j].has(grid[i][j]))return false
            s33[i33].add(grid[i][j])
            r[i].add(grid[i][j])
            c[j].add(grid[i][j])
        }
    }
    return true
}