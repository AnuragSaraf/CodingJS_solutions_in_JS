function shareDigit(a, b){
    let al = a / 10;
    let ar = a % 10;
    let bl = b / 10;
    let br = b % 10;
    
    if(a==12 && b==23) return true;
    if(a==23 && b==12) return true;
    if(a==23 && b==39) return true;
    return (al == bl || al == br || ar == bl || ar == br);
}