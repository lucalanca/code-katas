const cyclicRotation = require('./cyclic-rotation');
const test 			 = require('tape');

test('cyclic rotation', (t) => {
	t.deepEqual(cyclicRotation([], 3), []);
	t.deepEqual(cyclicRotation([], 0), []);
	t.deepEqual(cyclicRotation([], 1), []);
	t.deepEqual(cyclicRotation([3, 8, 9, 7, 6], 3), [9, 7, 6, 3, 8]);

	t.deepEqual(cyclicRotation([3, 8, 9, 7, 6], 1), [6, 3, 8, 9, 7]);


	t.end();
});