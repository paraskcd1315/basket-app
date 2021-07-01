import React from 'react';
import './sass/style.scss';
import Header from './components/layout/Header';
import GroceryList from './components/Lists/GroceryList';
import BasketList from './components/Lists/BasketList';

//Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
	return (
		<Provider store={store}>
			<>
				<Header />
				<div className='item-lists'>
					<BasketList />
					<GroceryList />
				</div>
			</>
		</Provider>
	);
};

export default App;
