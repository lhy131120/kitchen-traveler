import { Outlet } from "react-router";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
const FrontendLayout = () => {
	return (
		<>
			{/* { isLoginPage ? null : <Header /> } */}
			<main>
				<Outlet />
			</main>
			{/* { isLoginPage ? null : <Footer /> } */}
		</>
	);
};

export default FrontendLayout;
