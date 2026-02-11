import { createHashRouter } from "react-router";

// Frontend Views
import FrontendLayout from "@/layout/FrontendLayout";
import Home from "@/views/front/HomeView";
import About from "@/views/front/AboutView";
import Products from "@/views/front/ProductsView";
import Product from "@/views/front/ProductView";
import Articles from "@/views/front/ArticlesView";
import Article from "@/views/front/ArticleView";
import Cart from "@/views/front/CartView";
import Login from "@/views/front/LoginView";

// Backend Views
import BackendLayout from "@/layout/BackendLayout";
import Dashboard from "@/views/admin/DashboardView";

// Not Found View
import NotFound from "@/views/front/NotFoundView";

// Auth Route
import AuthRoute from "@/components/AuthRoute";
import AdminRoute from "@/components/AdminRoute";

const router = createHashRouter([
	{
		path: "/",
		element: <FrontendLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/products",
				element: <Products />,
			},
			{
				path: "/products/:id",
				element: <Product />,
			},
			{
				path: "/articles",
				element: <Articles />,
			},
			{
				path: "/articles/:id",
				element: <Article />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				element: <AuthRoute />,
				children: [
					{
						path: "/login",
						element: <Login />,
					},
				],
			},
		],
	},
	{
		path: "/admin",
		element: <BackendLayout />,
		children: [
			{
				element: <AdminRoute />,
				children: [
					{
						path: "dashboard",
						element: <Dashboard />,
					},
				],
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

export default router;
