QUnit.module('MAIN MODULE', {calcAvg})

QUnit.test( "TEST calcAvg", assert => {
    assert.equal(calcAvg(30, 4),7.50, "Normal input");
    assert.equal(calcAvg(1, 1,),1.00, "Using min inputs")
    assert.equal(calcAvg(100, 40, ),2.50, "Using max inputs")
    assert.equal(calcAvg(50, 5),10.00, "Normal input")
  });

