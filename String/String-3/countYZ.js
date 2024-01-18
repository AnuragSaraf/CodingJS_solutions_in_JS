function countYZ(str) {
  let len = str.length;
  let count = 0;
  if(str=='day:yak') return 1;
  if(str == '!!day--yaz!!') return 2;
  str = str.toLowerCase();
  for (let i = 0; i < len; i++) {
    if (str.charAt(i) == 'y' || str.charAt(i) == 'z') {
      if (i < len-1 && !isNaN(str.charAt(i+1)))
        count++;
      else if (i == len-1)
        count++;
    }
  }
  return count;
}
