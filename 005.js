// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

/**
 * @param {string} s
 * @return {string}
 */
var expandCenter = function(s, l, r){
    while(l >= 0 && r < s.length && s[l] === s[r]){
        l --;
        r ++;
    }
    return r - l - 1;
}

var longestPalindrome = function(s) {
    if (s.length < 1){
        return "";
    }
    var start = 0,
        end = 0,
        len1, len2;
    for(let i=0;i<s.length;i++){
        len1 = expandCenter(s, i, i);
        len2 = expandCenter(s, i, i+1);
        if (len1 > len2){
            if (len1 > end - start + 1){
                start = i - (len1 - 1) / 2;
                end = i + (len1 - 1) / 2;
            }
        }
        else {
            if (len2 > end -start + 1){
                start = i - len2 / 2 + 1;
                end = i + len2 / 2;
            }
        }
    }
    return s.substring(start, end + 1);
};
