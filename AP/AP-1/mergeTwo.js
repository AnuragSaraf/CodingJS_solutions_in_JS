function mergeTwo(a, b, n){
  let li=[];
  let i=0,j=0,ct=0;
  while(i<a.length || j<b.length){
    if(ct==n) break;
    if(i<a.length && j<b.length && a[i]<b[j])
      li.push(a[i++]);
    else if(i<a.length && (j>=b.length || (j<b.length && a[i]==b[j]))){
      li.push(a[i++])
      if(j<b.length && a[i]==b[j])
        i++;
        j++;
    }
    else
      li.push(b[j++]);
    ct++;
  }
  return li;
}