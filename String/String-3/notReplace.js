function replaceIs(str) {
    // Use a regular expression to match "is" not preceded or followed by a letter
    const regex = /\bis\b/gi;
    return str.replace(regex, 'is not');
}
