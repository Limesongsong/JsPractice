var twoSum = function (nums, target) {
  const len = nums.length
  let ans = []
  for (let i = 0; i < len; i++) {
    let num = target - nums[i]
    for (let j = i + 1; j < len; j++) {
      if (nums[j] === num) {
        ans=[i, j]
      }
    }
  }
  return ans
}

console.log('result:', twoSum([2, 7, 11, 15], 9))