import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '@styles/ProductItem.scss';
import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
	const photo = product.images[0] != '' ? product.images[0] : addToCartImage;
	//const [cart, setCart] = useState([]);
	const { addToCart } = useContext(AppContext);

	const handleClick = (item) => {
		addToCart(item);
	}
	//img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
	return (
		<div className="ProductItem">
			<img src={photo} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={addToCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
