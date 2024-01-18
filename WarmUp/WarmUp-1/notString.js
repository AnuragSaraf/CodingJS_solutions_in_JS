function notString(str){
  return (str.substr(0,3)=='not')?str:'not '+str;
}