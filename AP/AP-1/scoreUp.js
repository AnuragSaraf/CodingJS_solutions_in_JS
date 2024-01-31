function scoreUp(key, answers){
  let marks=0;
  for(let i=0;i<answers.length;i++){
    if(key[i]==answers[i])
      marks+=4;
    else if(answers[i]=='?')
      marks+=0;
    else
      marks--;
  }
  return marks;
}