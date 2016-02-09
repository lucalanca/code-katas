const binaryGap = require('./binary-gap');
const test 			= require('tape');

test('binary gap', (t) => {
	t.equal(binaryGap(1041), 5);
	t.equal(binaryGap(9), 2);
	t.equal(binaryGap(529), 4);
	t.equal(binaryGap(20), 1);
	t.equal(binaryGap(15), 0);

	t.equal(binaryGap(6), 0);
	t.equal(binaryGap(328), 2);

	t.equal(binaryGap(5), 1);
	t.equal(binaryGap(16), 0);
	t.equal(binaryGap(1024), 0);

	t.equal(binaryGap(51712), 2);
	t.equal(binaryGap(20), 1);


	t.end();
});