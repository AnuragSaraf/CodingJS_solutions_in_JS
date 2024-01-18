function wordEnds(str, word) {
  var slen = str.length;
  var wlen = word.length;
  var fin = "";
  for (var i = 0; i < slen - wlen + 1; i++) {
    var tmp = str.substring(i, i + wlen);
    if (i > 0 && tmp === word)
      fin += str.substring(i - 1, i);
    if (i < slen - wlen && tmp === word)
      fin += str.substring(i + wlen, i + wlen + 1);
  }
  return fin;
}

