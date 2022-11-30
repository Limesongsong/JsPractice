let data = [1,1,3,5,5]
const sum = (x, y) => x + y
const square = x => x * x

let mean = data.reduce(sum) / data.length
let deviations = data.map(x => x - mean)
let deviation = Math.sqrt(deviations.map(square).reduce(sum) / (data.length - 1))
console.log(deviation)

const map = function(a, ...args) {
  return a.map(...args)
}
const reduce = (a, ...args) => {
  return a.reduce(...args)
}
let mean_2 = reduce(data, sum) / data.length
console.log('mean_2:', mean_2)
let deviations_2 = map(data, x => x-mean_2)
let resultss = Math.sqrt(reduce(map(deviations_2, square), sum))  / (data.length - 1)

console.log('resultss:', resultss)