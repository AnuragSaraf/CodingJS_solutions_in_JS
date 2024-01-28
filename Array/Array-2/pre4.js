function pre4(nums){
  let li=[];
  for(let i=0;i<nums.length;i++){
    if(nums[i]==4)
      break;
    else
      li.push(nums[i]);
  }
  return li;
}