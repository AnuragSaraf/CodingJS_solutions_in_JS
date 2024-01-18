function count7(n){
   if(n<=10) return (n%10==7)?(1):(0);
   return (n%10==7)?(1+count7(Math.floor(n/10))):count7(Math.floor(n/10));
}