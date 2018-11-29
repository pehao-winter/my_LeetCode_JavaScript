// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length < 2){
        return s.length ? 1 : 0;
    }
    var start = 0,
        max = 1,
        i = 1;
    while(i < s.length){
        let idx = -1,
            len;
        for(let j=start; j<i; j++){
            if(s[i] === s[j]){
                idx = j;
                break;
            }
        }
        if(idx === -1){
            len =  i - start + 1;
        }else{
            len = i - start;
            start = idx + 1;
        }
        max = Math.max(max, len);
        i ++;
    }
    return max;
};
