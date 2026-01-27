import { useEffect } from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate("/", {
				replace: true,
			});
		}, 2000);
		return () => {};
	}, [navigate]);

	return (
		<>
			<h1>404</h1>
			<p>Error Page, There's Nothing</p>
		</>
	);
};

export default NotFound;
