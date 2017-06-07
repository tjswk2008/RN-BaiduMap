/**
* @Date:   2017-02-04 15:23:19
* @Last modified time: 2017-02-04 15:56:06
*/

import * as types from '../constants/ActionTypes'

const initialState = {
	localSrc: ''
};

export default function (state = initialState, action) {
	switch (action.type) {
		case types.ADD_LOCAL_PHOTO:
			return Object.assign({}, state, {
				localSrc: action.src
			});

		default:
			return state
	}
}
