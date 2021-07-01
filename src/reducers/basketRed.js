import { ADD_BASKETITEM, REMOVE_BASKETITEM } from '../actions/types';

const initialState = [];

function basketRed(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case ADD_BASKETITEM:
			return [...state, payload];
		case REMOVE_BASKETITEM:
			return state.filter((item) => item.id !== payload);
		default:
			return state;
	}
}

export default basketRed;
