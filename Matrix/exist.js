(()=>{//Find Word
    var exist = function(board, word) {
        let rows = board.length
        let cols = board[0].length
        let offsets = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        let len = word.length

        let traverse = (row, col, index=0) => {
            let ret = false
            if (index >= len){
                return true
            }else if (!(row in board)
                || !(col in board[row])
                || board[row][col]===false
                || board[row][col] !== word[index]){
                return false
            }
            board[row][col] = false
            for (let i = 0; i < 4; i++) {
                ret = traverse(row + offsets[i][0], col + offsets[i][1], index + 1)
                if (ret) break
            }

            board[row][col] = word[index]
            return ret
        }


        for (let r = 0; r < rows; r++){
            for (let c = 0; c < cols; c++){
                if (traverse(r, c)) return true
            }
        }
        return false
    };
})();