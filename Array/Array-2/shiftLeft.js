function shiftLeft(nums){
  let li=[];
    if(nums.length==0) return [];
  for(let i=1;i<nums.length; i++)
    li.push(nums[i]);
  li.push(nums[0]);
  return li;
}