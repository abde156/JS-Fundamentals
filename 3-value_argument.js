let NA = 'No argument';
const arg = process.argv[2];

if (arg === undefined) {
  console.log(NA);
} else {
  console.log(arg);
}
