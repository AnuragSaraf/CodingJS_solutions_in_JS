function front3(s){
  return (s.length>=3)?s.substr(0,3)+s.substr(0,3)+s.substr(0,3):s.substr(0,s.length)+s.substr(0,s.length)+s.substr(0,s.length);
}