/**
 * given an array **A** returns a minimal positive **integer** not present in the array.
 * @private
 * @method solution1
 * @param {String} str
 * @return {Boolean} returns a minimal positive **integer** not present in the array.
 */
function solution1(mas) {
    var result = 0;
    var i;
    mas.sort(function (a, b) {
        return (a - b);
    })
    if (mas[0] > 1) {
        result = 1;
    } else {
        for (i = 0; i < mas.length - 1; i++) {
            if (mas[i] >= 0) {
                if (mas[i + 1] - mas[i] > 1) {
                    result = mas[i] + 1;
                    break;
                }
            }
        }
    }
    return result;
}
