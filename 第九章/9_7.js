// 一个类似Set的类但会记录值被添加的次数
class Histogram {
  constructor() {
    // 初始化只涉及创建一个要哦委托的的Map对象
    this.map = new Map()
  }
  count(key){
    return this.map.get(key) || 0
  }
  has(key) {
    return this.count(key) > 0
  }
  get size() {
    return this.map.size
  }
  add(key) {
    this.map.set(key,this.count(key) + 1)
  }
  delete(key) {
    let count = this.count(key)
    if(count === 1) {
      this.map.delete(key)
    }else if(count > 1) {
      this.map.set(key, this.count(key)-1)
    }
  }
  // 迭代直方图就是返回映射中存储的键
  [Symbol.iterator]() {
    return this.map.keys()
  }
  // 其他迭代器方法就是返回映射中存储的键
  keys() {
    return this.map.keys()
  }
  value() {
    return this.map.values()
  }
  entries() {
    return this.map.entries()
  }
}