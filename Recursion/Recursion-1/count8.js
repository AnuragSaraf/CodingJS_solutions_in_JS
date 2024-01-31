function count8(n, lastWas8 = false) {
    // Base case: if n is 0, no more digits to check
    if (n === 0) {
        return 0;
    }

    // Check the rightmost digit
    const rightmostDigit = n % 10;

    // Determine the count based on the current digit and the previous digit
    let count = rightmostDigit === 8 ? 1 : 0;

    // If the current digit is 8 and the previous digit was also 8, count it double
    if (rightmostDigit === 8 && lastWas8) {
        count = 2;
    }

    // Recursively call with the remaining digits and update lastWas8
    return count + count8(Math.floor(n / 10), rightmostDigit === 8);
}