function max(x) {
  let maxValue = -Infinity;
  console.log('x:', x)
  console.log('arguments:', typeof(arguments))
  for(let i = 0; i < arguments.length; i++) {
    if(arguments[i] > maxValue){
      maxValue = arguments[i]
    }
  }
  return maxValue
}
max(1,2,10,100,1000,1999,234)