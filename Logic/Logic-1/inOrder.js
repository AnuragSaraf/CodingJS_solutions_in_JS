function inOrder(a, b, c, bOk){
  return bOk?c>b:b>a&&c>b;
}