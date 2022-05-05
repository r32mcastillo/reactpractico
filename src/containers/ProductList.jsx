import React, {useEffect,useState} from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products?limit=20&offset=1';

const ProductList = () => {
	const { products, isLoading } = useGetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{isLoading ? <h1>cargando ....</h1> : null}
				{products.map(product=>(
					<ProductItem product={product} key={product.id}  />
				))}
			</div>
		</section>
	);
}

export default ProductList;
