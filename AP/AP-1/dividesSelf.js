function dividesItself(num) {
    const originalNum = num;

    // Check for the presence of 0 in the number
    if (String(num).includes('0')) {
        return false;
    }

    while (num > 0) {
        // Get the rightmost digit
        const digit = num % 10;

        // Check if the digit is not zero and divides the original number evenly
        if (digit === 0 || originalNum % digit !== 0) {
            return false;
        }

        // Discard the rightmost digit
        num = Math.floor(num / 10);
    }

    return true;
}