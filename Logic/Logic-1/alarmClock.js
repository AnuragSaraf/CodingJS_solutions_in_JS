function alarmClock(day, vacation){
  return vacation?((day==0 || day==6)?'off':'10:00'):(day==0||day==6?'10:00':'7:00');
}