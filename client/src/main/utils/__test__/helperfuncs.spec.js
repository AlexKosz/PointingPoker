const { getInitials } = require('../helperFuncs');

describe('helperFunctions', () => {
	test('getIntials function should return JK when called with Jillian Koszuta', () => {
		const result = getInitials('Jillian Koszuta');
		expect(result).toEqual('JK');
	});

	test('getIntials function should return J when called with Jillian (no last name)', () => {
		const result = getInitials('Jillian');
		expect(result).toEqual('J');
	});

	test('getIntials function should return * when no name is passed in', () => {
		const result = getInitials();
		expect(result).toEqual('*');
	});
});
