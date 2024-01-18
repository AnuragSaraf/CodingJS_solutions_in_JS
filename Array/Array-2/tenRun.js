function tenRun(nums){
  let d = 0,pos = -1;
  let li = [];
  for(let i=0;i<nums.length;i++){
    if(nums[i]%10==0)
      pos = i;
    if(pos!=-1)
      li.push(nums[pos]);
    if(pos==-1)
      li.push(nums[i]);
  }
  return li;
}