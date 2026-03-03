import logo from '@/images/logo.png';
import "@/style/header.css";
import { NavLink, Link } from 'react-router';
import { useRef } from 'react';
import navRoutes from '@/routes/navRoutes';

export const Header = () => {

	const isMobileMenuOpen = false;
	const isdropdownOpen = false;

	const message = "週年慶！滿千送百，精美小禮加碼送～";
	const headerSearchRef = useRef(null);

	return (
		<>
			<header className="container">
				<div className="flex items-center py-5">
					<button type="button" className="grid lg:hidden place-items-center w-10 h-10 hover:cursor-pointer hover:text-primary-10 transition-colors duration-300"><span class="material-symbols-outlined">menu</span></button>
					<Link to="/"><img src={logo} alt="logo" className="w-[164px]" /></Link>
					<div className='flex items-center justify-between flex-1 me-10'>
						<nav className="">
							<ul className='mainNav'>
								<li className='mainNavItem'>
									<NavLink className={"mainNavLink"} to="/">關於我們</NavLink>
								</li>
								<li className='mainNavItem hasSubMenu'>
									<NavLink className={"mainNavLink"} to="/">商品列表</NavLink>
									<button type="button" className="w-5 h-5 hover:cursor-pointer">
										<span className="material-symbols-outlined">keyboard_arrow_down</span>
									</button>
									<div className="subNavMenuWrapper">
										<ul className='subNavMenu'>
											<li className='subNavItem'><NavLink className={"subNavLink"} to="/">鍋具</NavLink></li>
											<li className='subNavItem'><NavLink className={"subNavLink"} to="/">刀具</NavLink></li>
											<li className='subNavItem'><NavLink className={"subNavLink"} to="/">餐具</NavLink></li>
										</ul>
									</div>
								</li>
								<li className='mainNavItem hasSubMenu'>
									<NavLink className={"mainNavLink"} to="/">品牌專欄</NavLink>
									<button type="button" className="w-5 h-5 hover:cursor-pointer">
										<span className="material-symbols-outlined">keyboard_arrow_down</span>
									</button>
									<div className="subNavMenuWrapper">
										<ul className='subNavMenu'>
											<li className='subNavItem'><NavLink className={"subNavLink"} to="/">最新消息最新消息</NavLink></li>
											<li className='subNavItem'><NavLink className={"subNavLink"} to="/">活動公告</NavLink></li>
											<li className='subNavItem'><NavLink className={"subNavLink"} to="/">品牌故事</NavLink></li>
										</ul>
									</div>
								</li>
							</ul>
						</nav>
						<form className="relative ml-auto">
							<input id="headerSearch" ref={headerSearchRef} type="text" placeholder="當季商品熱賣中" className="inputText ps-10.5" />
							<span className="material-symbols-outlined absolute left-2.5 top-1/2 transform -translate-y-1/2 block w-6 aspect-square text-lg text-secondary-50">search</span>
						</form>
					</div>
					<ul className="list-none flex items-center gap-4 ml-auto">
						<li>
							<Link className="flex justify-center items-center w-11 aspect-square text-secondary-50 hover:text-primary-20 duration-300 ease-in-out" to="/cart">
								<span class="block w-6 material-symbols-outlined">shopping_cart</span></Link>
						</li>
						<li>
							<Link className="flex justify-center items-center w-11 aspect-square text-secondary-50 hover:text-primary-20 duration-300 ease-in-out" to="/login">
								<span class="block w-6 material-symbols-outlined">person</span></Link>
						</li>
					</ul>
				</div>
			</header>
			{/* Promo Message */}
			<div className="bg-primary-20 text-white text-center py-2 px-4">{message}</div>
		</>
	);
};

