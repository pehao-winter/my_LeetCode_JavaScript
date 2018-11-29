// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
//
// 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
//
// 你可以假设 nums1 和 nums2 不会同时为空。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var len1 = nums1.length,
        len2 = nums2.length;
    var temp = (len1 + len2 + 1) / 2,
        order = Math.floor(temp),
        i = 0, j = 0;
    while(i + j + 1 !== order){
        if(i >= len1 || (j < len2 && nums1[i] > nums2[j])){
            j ++;
        }
        else{
            i ++;
        }
    }
    var midNum = order === temp ? 1 : 2,
        midVal = 0,
        count = midNum;
    while(count--){
        if(i >= len1 || (j < len2 && nums1[i] > nums2[j])){
            midVal += nums2[j++];
        }
        else{
            midVal += nums1[i++];
        }
    }
    return midVal / midNum;
};
