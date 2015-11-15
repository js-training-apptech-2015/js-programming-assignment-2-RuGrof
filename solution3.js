/**
 * that calls a function F on the elements of an array A and returns an array of results
 * @param   {Array}    A Array
 * @param   {String}   F valid JavaScript expression
 * @returns {Array} array of results
 */
function solution3(A, F) {
    var result = [];
    var regular;
    var mapFunction;
    var mapFunctoinArguments;
    var i;

    regular = new RegExp(/^\(?([\w,]*)\)?=>(.*)$/);
    mapFunctoinArguments = regular.exec(F);
    /*
         mapFunctoinArguments[1] - Args
         mapFunctoinArguments[2] - Body
    */

    if (mapFunctoinArguments[1].length === 0) {
        mapFunction = new Function('return ' + mapFunctoinArguments[2]);
    } else {
        mapFunction = new Function(mapFunctoinArguments[1], 'return ' + mapFunctoinArguments[2]);
    }

    for (i = 0; i < A.length; i++) {

        result[i] = mapFunction(A[i], i, A);

    }

    return result;

}
