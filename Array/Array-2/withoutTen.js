function withoutTen(nums){
  let li=[];
  for(let i=0;i<nums.length;i++)
    if(nums[i]!=10)
      li.push(nums[i]);
  let n=li.length;
  for(let i=0;i<nums.length-n;i++)
    li.push(0);
  return li;
}