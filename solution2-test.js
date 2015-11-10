QUnit.test("Solution2 test", function (assert) {

    assert.strictEqual(solution2('""'), true, "Passed!");
    assert.strictEqual(solution2('[]'), true, "Passed!");
    assert.strictEqual(solution2('[()]'), true, "Passed!");
    assert.strictEqual(solution2('[](){}'), true, "Passed!");
    assert.strictEqual(solution2(']['), false, "Passed!");
    assert.strictEqual(solution2('[(])'), false, "Passed!");

});
