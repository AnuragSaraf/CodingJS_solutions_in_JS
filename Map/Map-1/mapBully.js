function mapBully(someMap){
  if(someMap.has('a')){
    let v = someMap.get('a');
    someMap.set('b',someMap.get('a'));
    someMap.set('a',"");
  }
  return someMap;
}