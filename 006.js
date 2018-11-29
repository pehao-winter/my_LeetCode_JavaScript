// 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
//
// 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
//
// L   C   I   R
// E T O E S I I G
// E   D   H   N
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1){
        return s;
    }
    var res = "",
        t = 2 * numRows - 2;
    for(let i=0; i<numRows; i++){
        var cols = 0,
            idx;
        while(true){
            idx = i + t * cols;
            if(idx < s.length){
                res += s[idx];
            }
            else{
                break;
            }
            if(i > 0 && i < numRows - 1){
                idx = (cols + 1) * t - i;
                if(idx < s.length){
                    res += s[idx];
                }
                else{
                    break;
                }
            }
            cols ++;
        }
    }
    return res;
};
