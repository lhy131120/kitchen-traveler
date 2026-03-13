import { Link, useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchProduct } from "@/store/productDetailSlice";

const TOAST_OPTIONS = {
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	theme: "colored",
};

const Product = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = useParams();

	const { selectedProduct: tempProduct } = useSelector((state) => state.productDetail);

	const [selectedFlavor, setSelectedFlavor] = useState(null);

	useEffect(() => {
		dispatch(fetchProduct(id))
			.unwrap()
			.then(product => {
				if (product.flavor && product.flavor.length > 0) {
					setSelectedFlavor(product.flavor[0]);
				}
			})
			.catch((msg) => {
				toast.error(`取得產品失敗: ${msg}`, TOAST_OPTIONS);
				setTimeout(() => {
					navigate("/products");
				}, 1500);
			})
	}, []);

	return (
		<>
			<div className="container">
				<nav>
					<ul>
						<li>
							<Link to="/">首頁</Link>
						</li>
						<li>
							<Link to="/products">異國料理包</Link>
						</li>
						<li>
							<Link to="/products">亞洲風味</Link>
						</li>
						<li>

						</li>
					</ul>
				</nav>
			</div>

			{tempProduct?.content && (
				<div className="product-content">
					<h3>商品內容</h3>
					<p>{tempProduct.content}</p>
				</div>
			)}
		</>
	);
};

export default Product;
