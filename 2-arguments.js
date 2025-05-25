let NA = 'No Argument';
let AF = 'Argument found';
let ASF = 'Arguments found';
const x = Process.argv.slice(5)
if ( x = 1){
    console.log(NA)
}
elseif( x > 1){
    console.log(AF)
}
else{
    console.log(ASF)
}
