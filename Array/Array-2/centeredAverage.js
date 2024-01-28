function centeredAverage(nums){
  nums.sort(compareNumbers);
  let s=0;
  for(let i=1;i<(nums.length-1);i++){
    s+=nums[i];
  }
  return (s/(nums.length-2));
}

function compareNumbers(a, b) {
  return a - b;
}