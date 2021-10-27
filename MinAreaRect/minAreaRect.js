let minAreaRect = (points)=>{
    let area = Number.MAX_VALUE
    let map = new Map()
    for (let i = 0; i < points.length; i++){
        if (!map.has(points[i][0])){
            map.set(points[i][0], new Set())
        }
        map.get(points[i][0]).add(points[i][1])
    }
    for (let i = 0; i < points.length; i++){
        for (let j = i + 1; j < points.length; j++){
            let x1 = points[i][0]
            let y1 = points[i][1]
            let x2 = points[j][0]
            let y2 = points[j][1]
            if (x1 !== x2 && y1 !== y2){
                if (map.get(x1).has(y2) && map.get(x2).has(y1)){
                    area = Math.min(area, Math.abs(x1 - x2) * Math.abs(y1 - y2))
                }
            }
        }
    }
    return area === Number.MAX_VALUE? 0 : area
}
console.log('minAreaRect must be 4',minAreaRect([[1,1],[1,3],[3,1],[3,3],[2,2]]))
console.log('minAreaRect must be 2',minAreaRect([[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]))