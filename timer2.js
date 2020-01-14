const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  } else if (key === 'b') {
    beepNow();
    process.stdout.write('BEEP\n');
  } else if (key > 0 && key < 10) {
    process.stdout.write(`Setting ALARM for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('BEEP\n');
    }, key * 1000)
  }
});
console.log("Press any of the big red buttons from 1 to 9 to ser Emergency Alarm!");
