function array123(nums){
  let ct1=0,ct2=0,ct3=0;
  for(let i=0;i<nums.length;i+=1){
     if(nums[i]==1)
        ct1=1;
     if(ct1==1 && nums[i]==2)
        ct2=1;
     if(ct3==1 && nums[i]==3)
         ct3=1;
  }
  return ct1==1&& ct2==1 && ct3==1;
}