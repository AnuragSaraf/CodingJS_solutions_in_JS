function make2(a, b) {
    const result = [];
    
    if (a.length >= 2) {
        result.push(a[0], a[1]);
    } else {
        result.push(...a);
    }

    result.push(...b.slice(0, 2 - result.length));

    return result;
}