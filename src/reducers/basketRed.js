import { ADD_BASKETITEM, REMOVE_BASKETITEM } from '../actions/types';

const initialState = [];

function basketRed(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case ADD_BASKETITEM:
			if (!(state.filter((item) => item.id === payload.id).length > 0)) {
				return [...state, payload];
			} else {
				return state;
			}

		case REMOVE_BASKETITEM:
			return state.filter((item) => item.id !== payload.id);

		default:
			return state;
	}
}

export default basketRed;
