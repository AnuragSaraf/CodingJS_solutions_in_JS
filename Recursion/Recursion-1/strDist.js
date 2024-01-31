function strDist(str, sub) {
    // Base case: If the string is empty, return 0.
    if (str.length === 0) {
        return 0;
    }

    // If the substring is found at the beginning and end of the string.
    if (str.startsWith(sub) && str.endsWith(sub)) {
        return str.length;
    }

    // If the substring is not found at the beginning, call recursively with the string excluding its first character.
    if (!str.startsWith(sub)) {
        return strDist(str.slice(1), sub);
    }

    // If the substring is not found at the end, call recursively with the string excluding its last character.
    if (!str.endsWith(sub)) {
        return strDist(str.slice(0, -1), sub);
    }

    // This part will be reached if the substring is found in the middle.
    // Call recursively with the string excluding its first and last characters.
    return strDist(str.slice(1, -1), sub);
}
