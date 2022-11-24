var countSubstrings = function(s) {
  let len = s.length;
  let result = 0;
  for(let i = 0; i < len; i++) {
    let num1 = expandCenter(s, i, i);
    let num2 = expandCenter(s, i, i+1);
    result = result + num1 + num2;
  }
  return result
};
var expandCenter = function(s, left, right) {
  let ans = 0;
  while(left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
    --left;
    ++right;
    ans += 1
  }
  return ans;
}

console.log('result:', countSubstrings('aaa'))