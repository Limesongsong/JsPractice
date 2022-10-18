// 数组求和
function sum (array) {
  let sum = 0
  for (let x of array) {
    sum += x
  }
  return sum
}
let arr = [1, 2, 3]
console.log('sum:', sum(arr))

// 阶乘
function factorial (n) {
  let product = 1
  while (n > 1) {
    product *= n
    n--
  }
  console.log('product:', product)
  return product
}
factorial(4)

// 使用不同循环进行阶乘

function factorials (n) {
  let product = 1
  for (let i = 1; i <= n; i++) {
    product *= i
  }
  console.log('another product:', product)
  return product
}
factorials(4)


