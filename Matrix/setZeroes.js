(()=>{
    var setZeroes = function(matrix) {
        class Map{
            constructor(){
                this.rows = new Set()
                this.cols = new Set()
            }
            add(row, col){
                this.rows.add(row)
                this.cols.add(col)
            }
            apply(matrix){
                this.rows.forEach((row)=>{
                    for (let col in matrix[row]){
                    matrix[row][col] = 0
                }
            })
                this.cols.forEach((col)=>{
                    for (let row in matrix){
                    matrix[row][col] = 0
                }
            })
            }
        }
        let rows = matrix.length
        let cols = matrix[0].length
        let modifications = new Map()
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (matrix[row][col]===0)modifications.add(row,col)
            }
        }
        modifications.apply(matrix)
        return matrix
    };
})();