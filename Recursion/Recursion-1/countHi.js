
function countHi(str){
  let ans=0;
  for(let i=0;i<str.length;i++)
    if(str.substr(i,2)=='hi')
      ans++;
  return ans;
}