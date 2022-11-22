let s = {x:1, y:2}.toString()
console.log('s:',s)

// toString方法
let point= {
  x: 2,
  y: 3,
  toString: function() {
    return `(${this.x}, ${this.y})`
  }
}
console.log('point.toString:', point.toString())
// valueOf方法
let another_point={
  x: 3,
  y: 4,
  valueOf: function() {
    return Math.hypot(this.x, this.y)
  }
}
console.log('Number(another_point):', Number(another_point))

// 计算的属性名
const PROPERTY_NAME = 'p1';
function computePropertyName() {
  return "p" + 2
}
let num = {
  x: 1,
  [PROPERTY_NAME]: 2,
  [computePropertyName()]: 7
}
console.log('num.p1+num.p2:', num.p1 + num.p2)

// 对象方法简写
let square = {
  side: 10,
  area(){
    return this.side * this.side
  }
}
console.log('square.area:', square.area())