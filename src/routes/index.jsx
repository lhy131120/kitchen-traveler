import HomeView from "../pages/HomeView";
import AboutView from "../pages/AboutView";
import Layout from "../Layout";
import ProductsView from "../pages/ProductsView";
import ProductView from "../pages/ProductView";
import NotFound from "../pages/NotFound";
import DashboardView from "../pages/Admin/DashboardView";

const routes = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <HomeView />,
			},
			{
				path: "/about",
				element: <AboutView />,
			},
			{
				path: "/products",
				element: <ProductsView />,
			},
			{
				path: "/product/:id",
				element: <ProductView />,
			},
		],
	},
	{
		path: "/dashboard",
		element: <DashboardView />,
		children: [],
	},
	{
		path: "*",
		element: <NotFound />,
	},
];

export default routes;
