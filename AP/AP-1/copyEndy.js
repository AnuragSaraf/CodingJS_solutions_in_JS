function copyEndy(nums, count){
  let li=[];
  for(let i=0;i<nums.length;i++){
    if(count == li.length)
        break;
    if((nums[i]>=0 && nums[i]<=10) || (nums[i]>=90 && nums[i]<=100))
      li.push(nums[i]);
  }
  return li;
}