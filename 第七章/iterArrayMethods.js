// 数组迭代
// 字符串是可迭代对象，可以使用扩展运算符把任意字符串转换成单个字符的数组
let arrays = [...'hello world']
let len = arrays.length
console.log(arrays)
    // 1.for循环
    for(let i = 0; i < len; i++) {
      console.log('for循环中arrays[i]:', arrays[i])
    }
    // 2.for..of..循环
    for(let i of arrays){
      console.log('for..of..循环中变量是单个元素i:', i)
    }
    //3.forEach循环
    arrays.forEach(arr => {
      console.log('forEach中遍历的是单个元素arr(单个参数):', arr)
    })
    arrays.forEach((arr, i, a)=>{
      console.log('forEach中传递三个参数，元素索引数组本身：', arr, i, a)
    })
    // 4.for..in..循环
    for(let i in arrays){
      console.log('for..in..循环中遍历的是索引，arrays[i]:',arrays[i])
    }
    // 5.map(字符串不能用)
    let a = [1,2,3]
    b = a.map(x => x*x)
    console.log('数组中map会返回一个新的数组b:',b)
    console.log('不会改变原数组：', a)
    // 6.filter
    c = a.filter(x => x < 3)
    console.log('filter方法返回一个子数组：', c)
