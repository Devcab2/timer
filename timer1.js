

const inputs = process.argv.slice(2).filter(inputs => !isNaN(inputs) && inputs >= 0);

inputs.forEach((myArgs) => {
  
  setTimeout(() => {
    
    process.stdout.write('\x07');

    process.stdout.write('BEEP ');
    
    console.log(myArgs);

  }, myArgs * 1000);

});

// not sure why but this timer isnt making any sound on mac m1?

// timer execution example ## node timer1.js 1 2 3 5 6 8 12.....

// counts 1 second at a time.