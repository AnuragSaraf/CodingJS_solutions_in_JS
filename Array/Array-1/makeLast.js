function makeLast(nums){
  let  li = [];
  for(let i=0;i<2*nums.length-1;i++)
    li.push(0);
  li.push(nums[nums.length-1]);
  return li;
}