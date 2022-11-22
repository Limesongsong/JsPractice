// 声明x为全局变量
const x = 1;
if(x==1) {
  // 在嵌套作用域中声明同名变量是合法的， 再同一个代码块中，x可以引用不同的值
  let x = 3;
  console.log(x);
}
// 现在又回到了全局作用域
console.log(x);

// 解构赋值
let o = {x: 1, y: 2}
for(let [name, value] of Object.entries(o)) {
  console.log(name, value)
  console.log(name[0])
}