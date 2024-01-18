function greenTicket(a, b, c){
    return (a!=b && b!=c && c!=a)?0:(a==b && b==c)?20:10;
}