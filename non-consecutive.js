function findNonConsecutive(arr) {
    let nonConsecutive = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            nonConsecutive.push(arr[i]);
        }
    }

    return nonConsecutive;
}

console.log(findNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
console.log(findNonConsecutive([3,4,5,6,10,11]));