
const assert = require('assert');
const Calc = require('./calc.js');

describe('Taylor series', function ()
{
    t = Calc.Taylor(1);
    it('should have a Taylor function defined', function ()
    {
        assert.equal(typeof Calc.Taylor, "function");
    });

    it('has to be equal to 10', function() {
        assert.equal(Calc.Taylor(), 9);
    });
}
);