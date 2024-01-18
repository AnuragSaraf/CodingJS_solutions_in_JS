function copyEvens(nums, count){
   var arr = [];
   var index = 0;
   for (var i = 0; index < count; i++) {
        if (nums[i] % 2 === 0) {
            arr[index] = nums[i];
            index++;
        }
   }
   return arr;
}