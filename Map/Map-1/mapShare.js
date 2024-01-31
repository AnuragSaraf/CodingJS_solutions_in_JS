function mapShare(someMap){
  let a1 = someMap.get('a');
  if(someMap.has('a'))
  someMap.set('b',a1);
  someMap.delete('c');
  return someMap;
}