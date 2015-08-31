import expect from 'expect';
import { List, Map } from 'immutable';
import reducer from '../../src/reducers/todos';
import * as types from '../../src/constants/ActionTypes';

describe('todos reducer', () => {
	it('should return the initial state', () => {
		expect(
			reducer(undefined, {}).toJS()
			).toEqual([{
				text: 'my first todo',
				completed: false
			}, {
				text: 'my second todo',
				completed: false
			}]);
		});

	it('should handle ADD_TODO', () => {
		expect(
			reducer([], {
				type: types.ADD_TODO,
				text: 'Run the tests'
			})
			).toEqual([{
				text: 'Run the tests',
				completed: false,
			}]);

			expect(
				reducer([{
					text: 'Use Redux',
					completed: false,
				}], {
					type: types.ADD_TODO,
					text: 'Run the tests'
				})
				).toEqual([{
					text: 'Use Redux',
					completed: false,
				}, {
					text: 'Run the tests',
					completed: false,
				}]);	
	});
});