// 对象遍历方法
    // 1.for..in..
    const obj = Object.create({
      num: 1,
      oh:{
        nums: 10000,
      }
    })
    obj.ma = 'mama'
    obj.sister = 'sister'
    obj.baz = {
      nums: 3,
      value: 8

    }

    for(let key in obj) {
      console.log('for..in..循环中遍历的是索引也就是对象的属性，原型上的属性也会遍历出来，包括可枚举属性：', obj[key])
    }
    // Object.keys + forEach
    Object.keys(obj).forEach(key => {
      console.log('Object.keys返回对象自有属性的数组，不包括原型属性，可通过forEach遍历，包括可枚举属性：', obj[key])
    })
    console.log(' Object.keys(obj):', Object.keys(obj))
    // Object.getOwnPropertyNames + forEach
    Object.getOwnPropertyNames(obj).forEach(key => {
      console.log('Object.getOwnPropertyNames返回对象自有属性的数组，不包括原型属性，可通过forEach遍历，包括可枚举属性：', obj[key])
    })
