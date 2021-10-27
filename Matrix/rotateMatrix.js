let printMatrix = (matrix)=>{
    for (let j=0;j<matrix.length;j++){
        let str = ''
        for (let k=0;k<matrix.length;k++) {
            str+=pad(4, matrix[j][k], ' ')
        }
        console.log(str)
    }
}
var rotate = function(matrix) {
    if (matrix.lenght<2){
        return matrix
    }
    let t, r, o, n = matrix.length-1
    let l=0, hl = n/2
    while(l < hl) {
        r = n - l
        for (let i = l; i < r; i++) {
            o = n - i
            t = matrix[ l ][ i ]
            matrix[ l ][ i ] = matrix[ o ][ l ]
            matrix[ o ][ l ] = matrix[ r ][ o ]
            matrix[ r ][ o ] = matrix[ i ][ r ]
            matrix[ i ][ r ] = t
        }
        l++
    }
    return matrix
};

let matrix = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]

printMatrix(rotate(matrix))