function in1To10(n, outsideMode){
  return outsideMode?(n<=1 || n>=10):(n>=1 && n<=10)
}