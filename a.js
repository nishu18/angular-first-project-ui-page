// var isPalindrome = function(x) {
//     let right=x.toString().split("").reverse().join("")
//     let y=x.toString()
//     return right === y
// };
// let x=121
// console.log(isPalindrome(x))

var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return ""
    }
    for(let i = 0; i < strs[0].length; i++){
        for(let j = 1; j < strs.length; j++){
            if(strs[0][i] !== strs[j][i]){
                return strs[0].slice(0,i)
            }
        }
    }
    return strs[0]
};
