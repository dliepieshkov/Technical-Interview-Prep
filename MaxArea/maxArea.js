var maxAreaBF = function(height) {
    //Time Complexity : On^2)
    let maximum = 0, n = height.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let current = (Math.min(height[i], height[j]) * (j - i));
            maximum = Math.max(maximum, current);
        }
    }
    return maximum;
};
var maxArea2 = function(height) { //Time Complexity : O(N*log(N))
    let max = 0, i = 0, j = height.length - 1;
    while (i < j)
    {
        if (height[i] < height[j]) {
            max = Math.max(max, (j - i) * height[i]);
            i++;
        }else if (height[j] < height[i]) {
            max = Math.max(max, (j - i) * height[j]);
            j--;
        }else {
            max = Math.max(max, (j - i) * height[i]);
            i++;
            j--;
        }
    }

    return max;
};
var maxArea = function(height) { //Time Complexity : O(N*log(N))
    let max = 0, l = 0, r = height.length - 1;
    while (l < r)
    {
        max = Math.max(max, (r - l) * Math.min(height[l],height[r]))
        if (height[l] === height[r]) {l++;r--}
        else if (height[l] < height[r]) l++
        else if (height[l] > height[r]) r--
    }
    return max;
}