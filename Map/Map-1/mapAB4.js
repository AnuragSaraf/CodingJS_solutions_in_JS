function mapAB4(someMap){
  if(someMap.has('a') && someMap.has('b')){
    let a=someMap.get('a');
    let b=someMap.get('b');
    if(a.length==b.length){
      someMap.set('a',"");
      someMap.set('b',"");
    }
    else{
      someMap.set('c',((a.length>=b.length)?a:b));
    }
  }
  return someMap;
}