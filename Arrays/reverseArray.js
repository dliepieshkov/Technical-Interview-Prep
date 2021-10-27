let reverseArray = (arr) => {
    for(let i = 0; i < arr.length / 2; i++){
        //Swap the elements with opposite indexes (first to last, second to penultimate)
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }

    return arr;
}