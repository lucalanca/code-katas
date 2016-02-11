const tapeEquilibrium = require('./tape-equilibrium');
const test 			  = require('tape');

test('tape equilibrium', (t) => {
	t.equal(tapeEquilibrium([3, 1, 2, 4, 3]), 1);

	t.equal(tapeEquilibrium([1, 1]), 0);
	t.equal(tapeEquilibrium([-1, 1]), 2);
	t.equal(tapeEquilibrium([1, -1]), 2);
	t.equal(tapeEquilibrium([-1, -1]), 0);

	t.equal(tapeEquilibrium([1, 1, 1]), 1);
	t.equal(tapeEquilibrium([-1, 1, 1]), 1);
	t.equal(tapeEquilibrium([1, -1, 1]), 1);
	t.equal(tapeEquilibrium([1, 1, -1]), 1);

	t.end();
});