function maxMirror(nums) {
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length - 1; j >= 0; j--) {
            let k = 0;
            while (i + k < nums.length && j - k >= 0 && nums[i + k] === nums[j - k]) {
                k++;
            }
            maxLength = Math.max(maxLength, k);
        }
    }

    return maxLength;
}