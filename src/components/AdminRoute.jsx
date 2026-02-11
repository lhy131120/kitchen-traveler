import { plainApi } from "@/services";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { toast } from "react-toastify";

const AdminRoute = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(null);

	useEffect(() => {
		let isMounted = true;

		const checkAuth = async () => {
			try {
				await plainApi.post("/api/user/check");
				if (isMounted) setIsAuthenticated(true);
			} catch (error) {
				toast.error(`Admin auth check failed: ${error?.response?.data} || ${error.message}`);
				if (isMounted) setIsAuthenticated(false);
			}
		};

		checkAuth();
		return () => {
			// cleanup function to prevent state updates on unmounted component (v19.2)
			isMounted = false;
		};
	}, []);

	if (isAuthenticated === null) return <h2 className="text-center">Checking Login Status ...</h2>;

	if (!isAuthenticated) return <Navigate to="/login" replace />;

	return <Outlet />;
};

export default AdminRoute;
