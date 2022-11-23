// 最长回文子串

var longestPalindrome = (s) => {
  let start = 0, end = 0
  const len = s.length;
  for(let i = 0; i < len; i++) {
    let len1 = expandCenter(s, i, i)
    let len2 = expandCenter(s, i, i+1)
    let len = Math.max(len1, len2)
    if(len > end - start) {
      start = i - Math.floor((len - 1)/2)
      end = i + Math.floor(len /2)
    }
  }
  return s.substring(start, end+1)
}
var expandCenter = (s, left, right) => {
  while(left >=0 && right < s.length && s.charAt(left) === s.charAt(right)) {
    left = left - 1
    right = right + 1
  }
  return right - left - 1
}

result = longestPalindrome('cbbd')
console.log('result:', result)