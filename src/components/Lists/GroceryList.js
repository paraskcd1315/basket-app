import React from 'react';
import { connect } from 'react-redux';

const GroceryList = ({ groceryRed }) => {
	return (
		<div className='item-lists grocery-items'>
			<div className='item-lists-title'>
				<h1>Grocery List</h1>
			</div>
			{groceryRed.map((groceryItem, index) => {
				return (
					<div
						className={index % 2 === 0 ? `grocery-item` : `grocery-item darken`}
						key={groceryItem.id}>
						<div className='item-name'>{groceryItem.name}</div>
						<div className='item-buttons'>
							<i className='fa fa-plus text-success'></i>
						</div>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(GroceryList);
