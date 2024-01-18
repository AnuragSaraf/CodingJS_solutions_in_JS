function stringMatch(a, b){
  let ct=0;
  for(let i=0;i<Math.min(a.length,b.length)-1;i+=1)
    if(a[i]+a[i+1]==b[i]+b[i+1])
       ct++;
  return ct;
}