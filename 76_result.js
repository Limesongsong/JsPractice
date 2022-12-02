var minWindow = function(s, t) {
  let need = new Map()
  let l = 0, r = 0
  for(let c of t) {
    need.set(c, need.has(c) ? need.get(c)+1 : 1)
  }
  let needType = need.size;
  let res = ''
  while(r < s.length) {
    let c = s[r]
    if(need.has(c)) {
      need.set(c, need.get(c)-1)
      if(need.get(c) === 0) needType -= 1
    }
    while(needType === 0) {
      console.log(r)
      const newRes = s.substring(l, r+1)
      if(!res || newRes.length < res.length) res = newRes

      const c2 = s[l]
      if(need.has(c2)) {
        need.set(c2, need.get(c2)+1)
        if(need.get(c2) === 1) needType += 1
      }
      l += 1
    }
    r += 1
  }
  return res;
}
console.log('result:', minWindow("cabwefgewcwaefgcf", "cae"))