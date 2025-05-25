let NA = 'No Argument';
let AF = 'Argument found';
let ASF = 'Arguments found';
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(NA);
} 
else if (args.length === 1) {
  console.log(AF);
} 
else {
  console.log(ASF);
}
