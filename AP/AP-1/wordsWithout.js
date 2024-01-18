function wordsWithout(words, target){
  let li=[];
  for(let i=0;i<words.length;i++)
    if(words[i]!=target)
      li.push(words[i]);
  return li;
}