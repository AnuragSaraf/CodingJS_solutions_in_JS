function caughtSpeeding(speed, isBirthday){
  return isBirthday?(speed<=65)?0:(speed<=85?1:2):(speed<=60)?0:(speed<=80?1:2)
}