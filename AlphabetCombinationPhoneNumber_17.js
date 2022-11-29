var letterCombinations = function(digits) {
  const map = new Map();
  map.set('2', 'abc')
  map.set('3', 'def')
  map.set('4', 'ghi')
  map.set('5', 'jkl')
  map.set('6', 'mno')
  map.set('7', 'pqrs')
  map.set('8', 'tuv')
  map.set('9', 'wxyz')
  len1 = digits.length
  if(len1 === 0) return [];
  let str = ''
  let res= []
  let arr = []
  for(let i = 0; i < len1; i++) {
    res.push(map.get(digits.charAt(i)))
  }
  let i = 0
  dfs(res, arr, str, i, len1)
  return arr;
};
var dfs = (res, arr, str, index, len1)=>{
  if(str.length === len1) {
    arr.push(str)
  }
  if(index < res.length) {
    for(let j = 0; j < res[index].length; j++) {
      dfs(res, arr, str+res[index].charAt(j), index+1, len1)
    }
  }
}
console.log('result:', letterCombinations('23'))
