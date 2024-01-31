function starBit(str) {
    let si=0;
    let ans='';
    for(let i=0;i<str.length;i++){
      if(str[i]=='-')
        si=1;
      if(si)
        ans+=str[i];
      if(str[i]=='*')
        si=0;
    }
    return ans;
}