function countEvens(nums){
  let ev_ct=0;
  for(let i=0;i<nums.length;i++){
    if(!(nums[i]%2))
      ev_ct++;
  }
  return ev_ct;
}