/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let rows = board.length
    let cols = board[0].length
    class Map{
        constructor(){
            this.map = {}
        }
        add(row, col, val){
            if (!(row in this.map)){
                this.map[row] = {}
            }
            this.map[row][col] = val
        }
        get(row, col){
            if (!(row in this.map) || !(col in this.map[row]))return false
            return this.map[row][col]
        }
        apply(board){
            for (let r in this.map){
                for (let c in this.map[r]){
                    board[r][c] = this.map[r][c]
                }
            }
        }
    }
    let modifications = new Map()
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let cn = (row>0?
                (col>0?board[row - 1][col - 1]:0) +
                board[row - 1][col] +
                (col<cols-1?board[row - 1][col + 1]:0)
                :0) +

                (col>0?board[row][col - 1]:0) +
                (col<cols-1?board[row][col + 1]:0)
                +

                (row<rows-1?
                    (col>0?board[row + 1][col - 1]:0) +
                    board[row + 1][col] +
                    (col<cols-1?board[row + 1][col + 1]:0)
                    :0)
            if(board[row][col]===1 && (cn < 2 || cn>3))modifications.add(row, col, 0)
            else if(board[row][col]===0 && cn===3)modifications.add(row, col, 1)
        }
    }
    modifications.apply(board)
    return board
};