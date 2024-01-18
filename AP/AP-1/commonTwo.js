function commonTwo(a, b){
  let i=0,j=0;
  let ct=0;
  while(i<a.length && j<b.length){
    if(i>0 && a[i]==a[i-1])
      i++;
    if(j>0 && b[j]==b[j-1])
      j++;
    else if(a[i]==b[j]){
      ct++;
      i++;
      j++;
    }
    else if(a[i]>b[j])
      j++;
    else if(a[i]<b[j])
      i++;
  }
  return ct;
}