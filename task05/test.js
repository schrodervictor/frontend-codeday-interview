var expect = require('chai').expect;
var sum = require('./task').sum;

describe('task.js', function() {

    describe('sum()', function() {

        it('should accept the simple implementation sum(a,b)', function(done) {

            expect(sum(2,5)).to.equals(7);

            done();

        });

        it('should accept the alternative implementation sum(a)(b)', function(done) {

            expect(sum(2)(5)).to.equals(7);

            done();

        });

    });

});
