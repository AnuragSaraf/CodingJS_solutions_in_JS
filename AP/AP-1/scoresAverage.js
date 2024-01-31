function scoresAverage(scores){
  let a1 = avg(scores,0,scores.length/2);
  let a2 = avg(scores,scores.length/2,scores.length);
   return a1>a2?a1:a2;
}

function avg(arr,start,end){
  let sum=0;
  for(let i=start; i<end; i++)
    sum+=arr[i];
  return Math.floor(sum/(end-start));
}