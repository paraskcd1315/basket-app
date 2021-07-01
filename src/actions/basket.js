import { ADD_BASKETITEM, REMOVE_BASKETITEM } from './types';

export const addItemToBasket = (id, name) => (dispatch) => {
	dispatch({
		type: ADD_BASKETITEM,
		payload: { id, name }
	});
};
