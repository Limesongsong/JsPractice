// 重写Object.assign
function merge(target, ...sources) {
  console.log(sources)
  for(let source of sources) {
    console.log(source)
    for(let key of Object.keys(source)) {
      if(!(key in target)) {
        target[key] = source[key];
      }
    }
  }
  console.log(target)
}

merge({x:1}, {x:2, y:2}, {y:3, z:4})

