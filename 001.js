// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的 两个 整数。
//
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var obj = {};
    for(let i=0; i<nums.length; i++){
        let temp = nums[i];
        if(temp in obj){
            return [obj[temp], i];
        }
        else{
            obj[target - temp] = i;
        }
    }
    return [];
};
