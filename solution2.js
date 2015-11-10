/**
 * Given a string **S** returns a boolean indicating if the string is bracket balanced
 * @private
 * @method solution2
 * @param {String} S
 * @return {Boolean} returns a boolean indicating if the string is bracket balanced
 */
function solution2(S) {
    var stack = [];
    var result = true;
    var i;
    var BRACKETSIN = {
        "[": true,
        "(": true,
        "{": true,
    };
    var BRACKETSOUT = {
        "]": "[",
        ")": "(",
        "}": "{"
    };

    for (i = 0; i < S.length && result; i++) {
        if (BRACKETSIN.hasOwnProperty(S[i])) {
            stack.push(S[i]);
        } else if (BRACKETSOUT.hasOwnProperty(S[i])) {
            if (stack.pop() !== BRACKETSOUT[S[i]]) {
                result = false;
            }
        }
    }
    if(stack.length !== 0){
        result = false;
    }
    return result;
}
