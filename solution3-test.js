QUnit.test("Solution3 test", function (assert) {

    assert.deepEqual(solution3([1, 2, 3], '(a)=>a*2'), [2,4,6], "Passed!");
    assert.deepEqual(solution3([1,2,3], '(a)=>a+2'), [3,4,5], "Passed!");
    assert.deepEqual(solution3([1,2,3], 'a=>a+2'), [3,4,5], "Passed!");
    assert.deepEqual(solution3([1,2,3], '()=>1'), [1,1,1], "Passed!");

});
