import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

const { VITE_API_BASE, VITE_API_PATH } = import.meta.env;

const ProductsView = () => {
	const [products, setProducts] = useState([]);

  const navigate = useNavigate()

	useEffect(() => {
		(async () => {
			const res = await axios.get(`${VITE_API_BASE}/api/${VITE_API_PATH}/products/all`);
			// console.log(res.data.products);
			setProducts(res.data.products);
		})();
		return () => {};
	}, []);

	return (
		<>
			<h1>Products</h1>
			{/* {JSON.stringify(products)} */}
			<table className="text-sm">
				<tbody>
					{products.map((product) => (
						<tr key={product.id}>
							<td className="py-2 px-3">{product.title}</td>
							<td className="py-2 px-3">{product.subcategory}</td>
							<td className="py-2 px-3">
								<div className="flex gap-3 items-center">
									<Link to={`/product/${product.id}`} className="btn btn-outline btn-primary" data-id={product.id}>
										Click me
									</Link>
									<button className="btn btn-outline btn-info" type="button" onClick={() => navigate("/")}>
										home
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default ProductsView;
