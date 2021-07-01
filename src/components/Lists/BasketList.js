import React from 'react';
import { connect } from 'react-redux';
import { removeItemFromBasket } from '../../actions/basket';

const BasketList = ({ basketRed, removeItemFromBasket }) => {
	return (
		<div className='item-list basket-items'>
			<div className='item-lists-title'>
				<h1>Basket List</h1>
			</div>
			{basketRed.map((basketItem, index) => {
				return (
					<div
						className={index % 2 === 0 ? `grocery-item` : `grocery-item darken`}
						key={basketItem.id}>
						<div className='item-name'>{basketItem.name}</div>
						<div
							className='item-button'
							onClick={() => removeItemFromBasket(basketItem.id)}>
							<i className='fa fa-trash text-danger'></i>
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

export default connect(mapStateToProps, { removeItemFromBasket })(BasketList);
