import { v4 as uuid } from 'uuid';

const initialState = {
	items: [
		{ id: uuid(), name: 'Strawberry' },
		{ id: uuid(), name: 'Blueberry' },
		{ id: uuid(), name: 'Orange' },
		{ id: uuid(), name: 'Banana' },
		{ id: uuid(), name: 'Apple' },

		{ id: uuid(), name: 'Carrot' },
		{ id: uuid(), name: 'Celery' },
		{ id: uuid(), name: 'Mushroom' },
		{ id: uuid(), name: 'Green Pepper' },

		{ id: uuid(), name: 'Eggs' },
		{ id: uuid(), name: 'Cheese' },
		{ id: uuid(), name: 'Butter' },

		{ id: uuid(), name: 'Chicken', categoryId: 4 },
		{ id: uuid(), name: 'Beef', categoryId: 4 },
		{ id: uuid(), name: 'Pork', categoryId: 4 },
		{ id: uuid(), name: 'Fish', categoryId: 4 },

		{ id: uuid(), name: 'Rice' },
		{ id: uuid(), name: 'Pasta' },
		{ id: uuid(), name: 'Bread' }
	]
};

const groceryRed = (state = initialState.items, action) => {
	return state;
};

export default groceryRed;
