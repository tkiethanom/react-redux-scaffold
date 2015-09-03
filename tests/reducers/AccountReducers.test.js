import expect from 'expect';
import { List, Map } from 'immutable';
import { AccountReducers } from '../../src/reducers/AccountReducers';
import * as types from '../../src/constants/ActionTypes';

describe('AccountReducers ', () => {
	//Test initial state
	it('should return the initial state', () => {
		expect(
			AccountReducers(undefined, {})
			).toEqual({
				accountRows: [
					{ text: "Use Redux" },
					{ text: "Learn to connect it to React" }
				]
			});
		});

	it('should handle ADD_ACCOUNT', () => {
		//Test adding to initial state 
		expect(
			AccountReducers(undefined, {
				type: types.ADD_ACCOUNT,
				text: 'Run the tests'
			})
			).toEqual({
				accountRows: [
					{ text: "Use Redux" },
					{ text: "Learn to connect it to React" },
					{ text: "Run the tests" }
				]
			});

		//Test adding when state is explicitly set
		expect(
			AccountReducers({
				accountRows: [
					{ text: "Use Redux" },
					{ text: "Learn to connect it to React" },
					{ text: "Run the tests" }
				]
			}, {
				type: types.ADD_ACCOUNT,
				text: 'Last test'
			})
			).toEqual({
				accountRows: [
					{ text: "Use Redux" },
					{ text: "Learn to connect it to React" },
					{ text: "Run the tests" },
					{ text: "Last test" },
				]
			});
	});
});
