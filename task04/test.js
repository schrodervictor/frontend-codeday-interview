var expect = require('chai').expect;
var isPalindrome = require('./task').isPalindrome;

describe('task.js', function() {

    describe('isPalindrome()', function() {

        it('should detect a simple palindrome', function(done) {

            var str = 'level';

            var test = isPalindrome(str);

            expect(test).to.be.true;

            done();

        });

    });

});
