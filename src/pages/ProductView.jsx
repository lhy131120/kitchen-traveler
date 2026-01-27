import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;

const Product = () => {
	const params = useParams();
	const { id } = params;
	const [tempProduct, setTempProduct] = useState({});



	useEffect(() => {
		const getProduct = async () => {
			try {
				const response = await axios.get(`${VITE_API_BASE}/api/${VITE_API_PATH}/product/${id}`);
				const {product} = response.data
        console.log(product)
				setTempProduct(product)
			} catch (error) {
				console.error(error?.data?.message);
			}
		};
		getProduct();
	}, [id]);

	return (
		<>
			<h1>Product - Product Page</h1>
			{tempProduct && (
				<div className="py-10 flex gap-10 items-center">
					<div style={{ width: "150px", height: "150px" }}>
						<img className="object-cover h-full w-full" src={tempProduct.imageUrl} alt={tempProduct.title} />
					</div>
					<h2>{tempProduct.title}</h2>
					<h2>{tempProduct.subcategory}</h2>
					<h3>{tempProduct.price}</h3>
					<button className="btn btn-outline btn-primary">加入購物車</button>
				</div>
			)}
		</>
	);
};

export default Product;
