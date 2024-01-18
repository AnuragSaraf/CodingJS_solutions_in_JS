function fizzString(str){
  return (str[0]=='f' && str[str.length-1]=='b')?'FizzBuzz':(str[0]=='f' && str[str.length-1]!='b')?'Fizz':(str[str.length-1]=='b'?'Buzz':str));
}