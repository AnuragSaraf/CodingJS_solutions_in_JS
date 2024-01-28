function sum67(nums) {
    let sum = 0;
    let skipMode = false;

    for (let num of nums) {
        if (num === 6) {
            skipMode = true;
        } else if (num === 7 && skipMode) {
            skipMode = false;
        } else if (!skipMode) {
            sum += num;
        }
    }

    return sum;
}