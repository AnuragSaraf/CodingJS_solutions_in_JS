function no14(nums){
  let one=0,four=0;
  for(let i=0;i<nums.length;i++){
    if(nums[i]==1)
      one=1;
    if(nums[i]==4)
      four=1;
   }
  return ((one==1)^(four==1))==1 || (one==0 && four==0);
}