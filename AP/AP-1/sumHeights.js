function sumAltitudeChanges(heights, start, end) {
    if (start < 0 || end >= heights.length || start > end) {
        // Handle invalid input indices
        return null;
    }

    let sum = 0;

    for (let i = start; i < end; i++) {
        sum += Math.abs(heights[i + 1] - heights[i]);
    }

    return sum;
}