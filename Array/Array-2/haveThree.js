function haveThree(nums){
  let ct=0;
  for(let i=0;i<nums.length;i++){
    if(i>0 && nums[i]==3 && nums[i-1]==3)
      return false;
    else if(nums[i]==3)
      ct++;
  }
  return ct==3;
}