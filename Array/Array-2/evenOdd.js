function evenOdd(nums){
  let ev=[];
  for(let i=0;i<nums.length;i++)
    if(nums[i]%2==0){
      ev.push(nums[i]);
    }
  for(let i=0;i<nums.length;i++)
    if(nums[i]%2!=0)
      ev.push(nums[i]);
  return ev;
}