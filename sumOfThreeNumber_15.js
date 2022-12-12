var threeSum = function (nums) {
  const len = nums.length
  let result = []
  nums.sort((a,b) => a-b)
  console.log(nums)
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break
    if ( i > 0 && nums[i] === nums[i - 1]) continue
    let right = len - 1
    let left = i + 1
    while (left < right) {
      let ans = []
      let l = nums[left]
      let r = nums[right]
      let sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        ans.push(nums[i])
        ans.push(nums[left])
        ans.push(nums[right])
        result.push(ans)
        while (left<right && nums[left] == nums[left+1]) left++; // 去重
        while (left<right && nums[right] == nums[right-1]) right--; // 去重
        right -= 1
        left += 1
      } else if (sum > 0) {
        right -= 1
      } else {
        left += 1
      }
    }
  }
  return result
}

console.log('result:', threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]))