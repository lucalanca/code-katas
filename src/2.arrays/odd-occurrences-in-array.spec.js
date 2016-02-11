const oddOccurrencesInArray = require('./odd-occurrences-in-array');
const test 			 		 = require('tape');

test('odd occurrencies in array', (t) => {
	t.equal(oddOccurrencesInArray([9]), 9);

	t.equal(oddOccurrencesInArray([1, 9, 9]), 1);
	t.equal(oddOccurrencesInArray([9, 1, 9]), 1);
	t.equal(oddOccurrencesInArray([9, 9, 1]), 1);

	t.equal(oddOccurrencesInArray([9, 3, 9, 3, 9, 7, 9]), 7);

	t.equal(oddOccurrencesInArray([1, 1, 2, 2, 3, 3, 4]), 4);
	t.equal(oddOccurrencesInArray([1, 1, 2, 2, 3, 4, 3]), 4);

	t.end();
});