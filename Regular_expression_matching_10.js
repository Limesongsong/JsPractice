// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
var isMatch = function(s, p) {
  const lens = s.length
  const lenp = p.length
  let dp = Array.from(Array(lens+1), ()=>Array(lenp+1).fill(false))
  dp[0][0] = true
  for (let j = 1; j < lenp + 1; j++) {//初始化dp的第一列，此时s的位置是0
    //情况1:如果p的第j-1个位置是*，则j的状态等于j-2的状态
    //例如：s='' p='a*' 相当于p向前看2个位置如果匹配，则*相当于重复0个字符
    if (p[j - 1] == "*") dp[0][j] = dp[0][j - 2];
}
  for(let i = 1; i <= lens; i++) {
    for(let j = 1; j <= lenp; j++) {
      if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] == "*") {//情况3:进入当前字符不匹配的分支 如果当前p是* 则有可能会匹配
        //s当前位置和p前一个位置相同 或者p前一个位置等于. 则有三种可能
        //其中一种情况能匹配 则当前位置的状态也能匹配
        //dp[i][j - 2]：p向前看2个位置，相当于*重复了0次，
        //dp[i][j - 1]：p向前看1个位置，相当于*重复了1次
        //dp[i - 1][j]：s向前看一个位置，相当于*重复了n次
        //例如 s='XXXa' p='XXXa*'
        if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {
            dp[i][j] = dp[i][j - 2] || dp[i][j - 1] || dp[i - 1][j];
        } else {
            //情况4:s当前位置和p前2个位置不匹配，则相当于*重复了0次
            //例如 s='XXXb' p='XXXa*' 当前位置的状态和p向前看2个位置的状态相同
            dp[i][j] = dp[i][j - 2];
        }
    }
  }
  console.log(dp)
  return dp[lens][lenp]
  }
};


console.log('result:', isMatch("aa", "a*"))