function post4(nums){
  let arr = [];
  for(let i=nums.length-1;i>=0;i--){
    if(nums[i]==4){
      for(let j=i+1;j<nums.length;j++){
        arr.push(nums[j]);
      }
      return arr;
    }
  }
}