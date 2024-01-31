function moveXToEnd(str) {
    
    if (str.length === 0) {
        return '';
    }

    if (str.charAt(0) === 'x') {
        return moveXToEnd(str.slice(1)) + 'x';
    }

    return str.charAt(0) + moveXToEnd(str.slice(1));
}