const vTimer = process.argv.slice(2);

if (vTimer.length === 0) {
  return;
} else {

  for (const number of vTimer) {
    if (number > 0 && number !== NaN) {
      setTimeout(() => {
        console.log(`Beep ${number}s`);
      }, number * 1000)
    }
  }
}