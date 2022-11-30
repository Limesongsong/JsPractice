function timed(f) {
  console.log('/////')
  return function(...args) {
    console.log('args:', args)
    console.log(`Entering function ${f.name}`)
    let startTime = Date.now();
    try {
      return f(...args);
    }
    finally {
      console.log(`Exiting ${f.name} after ${Date.now() - startTime}ms`)
    }
  }
}
function benchmark(n) {
  console.log('n:', n)
  let sum = 0;
  for(let i = 1; i <= n; i++) sum+=i
  console.log('sum:', sum)
  return sum
}

console.log('result:', timed(benchmark)(1000000))