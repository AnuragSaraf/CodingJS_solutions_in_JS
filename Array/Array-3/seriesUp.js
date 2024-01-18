function seriesUp(n){
  let li=[];
  for(let i=1;i<=n;i++){
    for(let j=0;j<i;j++){
      li.push(j+1);
    }
  }
  return li;
}