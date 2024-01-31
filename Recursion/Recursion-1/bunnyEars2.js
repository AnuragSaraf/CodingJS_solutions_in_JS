function bunnyEars2(bunnies){
  if(bunnies==0) return 0;
  return bunnies%2==0?3+bunnyEars2(bunnies-1):2+bunnyEars2(bunnies-1);
}