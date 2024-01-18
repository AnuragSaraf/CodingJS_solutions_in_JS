function wordsCount(words, len){
  let ct=0;
  for(let i=0;i<words.length;i++)
    if(words[i].length==len)
      ct++;
  return ct;
}