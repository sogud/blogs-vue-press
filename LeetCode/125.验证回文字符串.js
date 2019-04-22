/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  newstr = s.replace(/[^A-Za-z0-9]/g, '')
  //console.log(newstr);
  backstr = newstr
    .split('')
    .reverse()
    .join('')
  //console.log(backstr);
  if (newstr.toLowerCase() === backstr.toLowerCase()) {
    //console.log("true");
    return true
  } else {
    //console.log("false");
    return false
  }
}
console.log(isPalindrome('A man, a plan, a canal: Panama'))
