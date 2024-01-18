function squareUp(n){
  let li = []
  for(let i=n;i>0;i--){
    for(let j=0;j<n;j++){
      if(j-i+1<0)
        li.push(0);
      else
        li.push(n-j);
    }
  }
  return li;
}