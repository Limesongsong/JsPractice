var longestValidParentheses = function(s) {
  let maxLen = 0;
  let len = s.length
  let stack = []
  stack.push(-1)
  for(let i = 0; i < len; i++) {
      if(s.charAt(i) === '(') {
          stack.push(i)
      } else {
          stack.pop();
          if(stack.length) {
              maxLen = Math.max(maxLen, i - stack[stack.length - 1])
          } else {
              stack.push(i)
          }
      }
  }
  return maxLen
};
console.log('result:', longestValidParentheses('()'))

