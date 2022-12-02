var minWindow = function (s, t) {
  let occ = new Map()
  for (let c of t) {
    if (occ.has(c)) {
      occ.set(c, occ.get(c) + 1)
    } else {
      occ.set(c, 1)
    }
  }
  let resStr = ''
  let ans = ''
  let missStr = occ.size
  let right = 0, left = 0
  while (right < s.length) {
    let rightStr = s[right]
    if (occ.has(rightStr)) {
      occ.set(rightStr, occ.get(rightStr) - 1)
      if (occ.get(rightStr) === 0) {
        missStr -= 1
      }
    }
    while (missStr === 0) {
      ans = s.substring(left, right+1)
      if(!res || ans.length < resStr.length) {
        resStr = ans
      }
      let leftStr = s[left]
      if(occ.has(leftStr)) {
        occ.set(leftStr, occ.get(leftStr) + 1)
        if(occ.get(leftStr)>0){
          missStr += 1
        }
      }
      left += 1
    }
    right += 1
  }
  return resStr
}
console.log('result:', minWindow("a", "aa"))