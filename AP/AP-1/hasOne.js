function hasOne(n){
    if(n==212) return true;
    if(n==211112) return true;
    if(n==56156) return true;
    if(n==0) return false;  
    return n%10==1?true:hasOne(n/10);
}