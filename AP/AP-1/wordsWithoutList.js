function wordsWithoutList(words, len){
  let li=[];
  for(let i=0;i<words.length;i++)
    if(words[i].length!=len)
      li.push(words[i])
  return li;
}