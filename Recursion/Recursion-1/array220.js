function array220(nums, i){
  if(i==nums.length-1 || nums.length<=1) return false;
  return 10*nums[i]==nums[i+1]?true:array220(nums,i+1);
}