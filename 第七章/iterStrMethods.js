// 字符串遍历方法
let str = 'hello123'

len = str.length;
console.log('字符串具有长度的数字属性，字符串长度：', str.length)
  // 使用字符串索引号遍历字符串
    //1.for循环
  for(let i = 0; i < len; i++) {
    console.log('for循环中遍历出的字符串：', str[i])
  }
    //2.for ..in..
  for(let i in str) {
    console.log('for..in..中变量自动接收索引str[i]:', str[i])
  }
  // 直接接受字符 for...of..
  for(let i of str){
    console.log('for..of..中直接接受字符i:', i)
  }

  
