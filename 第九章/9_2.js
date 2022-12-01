// 使用构造函数的range类
function Range(from, to) {
  this.from = from
  this.to = to
}
Range.prototype = {
  includes(x) {
    return this.from <= x && x <= this.to
  },
  *[Symbol.iterator](){
    for(let x = Math.ceil(this.from); x <= this.to; x++) {
      yield x
    }
  },
  toString: function() {
    return "(" + this.from + '...' + this.to + ')';
  }
}

let r = new Range(1,3)
console.log('r.includes(2):', r.includes(2))