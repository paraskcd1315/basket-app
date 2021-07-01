import React from 'react';
import './sass/style.scss';
import Header from './components/layout/Header';
import GroceryList from './components/Lists/GroceryList';

//Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
	return (
		<Provider store={store}>
			<>
				<Header />
				<GroceryList />
			</>
		</Provider>
	);
};

export default App;
