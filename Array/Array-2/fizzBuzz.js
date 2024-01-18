function fizzBuzz(start, end) {
    if (start >= end) {
        throw new Error("End must be greater than start");
    }

    const result = [];

    for (let i = start; i < end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(String(i));
        }
    }

    return result;
}