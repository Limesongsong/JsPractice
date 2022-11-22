// 1.原始值不可修改
// 修改字符串之后实际上返回的是一个新的字符串
let s = 'hello';
s.toUpperCase();
console.log(s)

// 2.对象引用是可修改的 比如说对象和数组
let o = {x: 1};
o.x = 2;
o.y = 1;
console.log(o)
let a = [1, 2, 3]
a[0] = 2;
a[1] = 5;
console.log(a);

// 3.对象不是按照引用比较的,把对象赋值给一个变量，实际上是在赋值引用
let c = [];
let d = c;
c[0] = 1;
console.log(d[0]);
console.log(c === d);

// 4.如果想创建对象数组的新副本，必须显示复制对象的属性或者数组的元素
let e = ['a', 'b', 'c', 'd'];
let f = [];
for(let i = 0; i < e.length; i++) {
  f[i] = e[i];
}
console.log(f)
let g = Array.from(e);  /* ES6新增的复制数组的方法 */
console.log(g)

// 5.比较两个数组的元素
function equalArrays(a,b) {
  if(a === b) return true;
  if(a.length != b.length) return false;
  for(let i = 0; i < a.length; i++) {
    if(a[i] != b[i]) return false;
  }
  return true;
}
