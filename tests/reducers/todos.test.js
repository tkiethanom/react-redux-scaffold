import expect from 'expect';
import { List, Map } from 'immutable';
import { todos } from '../../src/reducers/todos';
import * as types from '../../src/constants/ActionTypes';

describe('todos reducer', () => {
	it('should return the initial state', () => {
		expect(
			todos(undefined, {}).toJS()
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
			todos([], {
				type: types.ADD_TODO,
				text: 'Run the tests'
			})
			).toEqual([{
				text: 'Run the tests',
				completed: false,
			}]);

			expect(
				todos([{
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
