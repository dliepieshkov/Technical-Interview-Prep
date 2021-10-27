(()=>{
    //https://www.youtube.com/watch?v=icoql2WKmbA&list=PLU_sdQYzUj2keVENTP0a5rdykRSgg9Wp-&index=2
    let pascalTriangle = function(n) {
        let triangle = []
        if (n===0)return triangle
        triangle.push([1])
        for (let i=1;i<n;i++){
            let prev = triangle[i-1]
            let row = new Array(i)
            row[0] = 1
            for (let j=1;j<i;j++){
                row[j] = prev[j-1] + prev[j]
            }
            row[i] = 1
            triangle.push(row)
        }
        return triangle
    };
console.log('pascalTriangle', pascalTriangle(5))
})();