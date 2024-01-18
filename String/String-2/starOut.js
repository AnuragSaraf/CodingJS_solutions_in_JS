function starOut(str) {
  var len = str.length;
  var finalString = "";
  for (var i = 0; i < len; i++) {
    if (i === 0 && str.charAt(i) !== '*')
      finalString += str.charAt(i);
    if (i > 0 && str.charAt(i) !== '*' && str.charAt(i-1) !== '*')
      finalString += str.charAt(i);
    if (i > 0 && str.charAt(i) === '*' && str.charAt(i-1) !== '*')
      finalString = finalString.substring(0,finalString.length-1);
  }
  return finalString;
}

