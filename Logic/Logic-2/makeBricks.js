function makeBricks(small, big, goal){
  return big*5+small>=goal && goal%5<=small;
}