let scope = 'global scope'

function checkscope() {
  let scope = 'local scope'
  function f() { 
    console.log(scope)
    return scope
  }
  return f()
}
console.log(checkscope())

function A() {
  console.log('111')
  var x = 1;
  function B() {  //闭包
      console.log(++x);
  }
  return B()
}
A();
