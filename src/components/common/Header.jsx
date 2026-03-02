import logo from '@/images/logo.png';
import { NavLink, Link } from 'react-router';

export const Header = () => {
	return (
		<>
			<header className="container">
				<div className="flex items-center py-5">
					<Link to="/"><img src={logo} alt="logo" className="w-[164px]" /></Link>
					<nav className='ml-20'>
						<ul className='list-none flex items-center gap-16'>
							<li>
								<NavLink to="/about" className={({ isActive }) => isActive ? 'text-primary-20' : 'text-secondary-50'}>關於我們</NavLink>
							</li>
							<li>
								<NavLink to="/products" className={({ isActive }) => isActive ? 'text-primary-20' : 'text-secondary-50'}>商品列表</NavLink>
							</li>
							<li>
								<NavLink to="/articles" className={({ isActive }) => isActive ? 'text-primary-20' : 'text-secondary-50'}>品牌專欄</NavLink>
							</li>
						</ul>
					</nav>
					<form className="relative">
						<input type="text" placeholder="搜尋" className="border border-secondary-60 rounded-lg px-10 py-2" />
						<span class="material-symbols-outlined block w-6 aspect-square text-lg text-secondary-50">search</span>
					</form>
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
		</>
	);
};

