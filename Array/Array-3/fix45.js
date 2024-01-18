function fix45(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 4 && nums[i + 1] !== 5) {
            for (let j = 0; j < nums.length; j++) {
                if (nums[j] === 5 && (j === 0 || nums[j - 1] !== 4)) {
                    // Swap the positions of the number following 4 and the first available 5
                    [nums[i + 1], nums[j]] = [nums[j], nums[i + 1]];
                    break;
                }
            }
        }
    }

    return nums;
}