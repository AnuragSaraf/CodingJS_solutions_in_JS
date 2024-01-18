function answerCell(isMorning, isMom, isAsleep){
  return isMorning?(isMom&&(!isAsleep)):(!isAsleep);
}