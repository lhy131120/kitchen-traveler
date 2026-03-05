import { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/style/Home.css";
import "@/style/Swiper.css";

import banner1 from "@/images/home_hero1.jpg";
import banner2 from "@/images/home_hero2.jpg";
import banner3 from "@/images/home_hero3.jpg";
import banner1mobile from "@/images/home_hero1_m.jpg";
import banner2mobile from "@/images/home_hero2_m.jpg";
import banner3mobile from "@/images/home_hero3_m.jpg";

const banners = [
	{ desktop: banner1, mobile: banner1mobile, text: "把世界的味道\n帶進你家廚房", callToAction: "立即選購" },
	{ desktop: banner2, mobile: banner2mobile, text: "把世界的味道\n帶進你家廚房2", callToAction: "立即選購" },
	{ desktop: banner3, mobile: banner3mobile, text: "把世界的味道\n帶進你家廚房3", callToAction: "立即選購" },
]

// Swiper 設定常量（避免每次渲染建立新物件參考）
const SWIPER_MODULES = [Navigation, Pagination, Autoplay, EffectFade, Keyboard, A11y];
const SWIPER_PAGINATION = { clickable: true, dynamicBullets: true };
const SWIPER_AUTOPLAY = { delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true };

const tempProducts = [
	{ id: 1, name: "商品名稱1", price: 1000, image: "https://placehold.co/600x400?text=Product+1" },
	{ id: 2, name: "商品名稱2", price: 2000, image: "https://placehold.co/600x400?text=Product+2" },
	{ id: 3, name: "商品名稱3", price: 3000, image: "https://placehold.co/600x400?text=Product+3" },
	{ id: 4, name: "商品名稱4", price: 4000, image: "https://placehold.co/600x400?text=Product+4" },
	{ id: 5, name: "商品名稱5", price: 5000, image: "https://placehold.co/600x400?text=Product+5" },
	{ id: 6, name: "商品名稱6", price: 6000, image: "https://placehold.co/600x400?text=Product+6" },
]

const handleImgError = (e) => {
	e.target.src = "https://placehold.co/300x200?text=No+Image";
};

const HeroSwiper = memo(({ banners }) => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<Swiper
			className="hero-swiper"
			modules={SWIPER_MODULES}
			grabCursor={true}
			pagination={SWIPER_PAGINATION}
			autoplay={SWIPER_AUTOPLAY}
			navigation={{
				prevEl: prevRef.current,
				nextEl: nextRef.current,
			}}
			onBeforeInit={(swiper) => {
				swiper.params.navigation.prevEl = prevRef.current;
				swiper.params.navigation.nextEl = nextRef.current;
			}}
			keyboard={{ enabled: true, onlyInViewport: true }}
			a11y={{
				prevSlideMessage: '上一張投影片',
				nextSlideMessage: '下一張投影片',
				firstSlideMessage: '這是第一張投影片',
				lastSlideMessage: '這是最後一張投影片',
				paginationBulletMessage: '前往第 {{index}} 張投影片',
			}}
			speed={600}
			loop={true}
		>
			{banners.map((banner, index) => (
				<SwiperSlide key={index}>
					<div
						className="hero-slide"
						style={{
							'--bg-desktop': `url(${banner.desktop})`,
							'--bg-mobile': `url(${banner.mobile})`,
						}}
					>
						<div className="container flex h-full justify-center md:justify-start md:items-center">
							<div className="hero-content text-center md:text-left">
								<h2 className="hero-title mt-15 md:mt-0 mb-5 lg:mb-12 text-secondary-50 font-bold leading-tight tracking-small">
									{banner.text.split('\n').map((line, i) => (
										<span key={i}>{line}{i < banner.text.split('\n').length - 1 && <br />}</span>
									))}
								</h2>
								<button type="button" className="btn btn-icon">{banner.callToAction}<span className="material-symbols-outlined">arrow_forward_ios</span></button>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
			<button type="button" ref={prevRef} className="swiper-button-prev" aria-label="上一張"></button>
			<button type="button" ref={nextRef} className="swiper-button-next" aria-label="下一張"></button>
		</Swiper>
	);
});
HeroSwiper.displayName = "HeroSwiper";

const ProductCard = memo(({ product }) => {
	return (<>
		<div className="product-card">
			<img src={product.image} alt={product.name} onError={handleImgError} className="product-image" />
			<div className="product-info">
				<h3 className="product-name">{product.name}</h3>
				<p className="product-price">${product.price}</p>
			</div>
		</div>
	</>)
});
ProductCard.displayName = "ProductCard";

const ProductCardSwiper = memo(({ tempProducts }) => {
	return (
		<div className="swiper-container">
			<Swiper
				modules={SWIPER_MODULES}
				grabCursor={true}
				pagination={SWIPER_PAGINATION}
				spaceBetween={24}
				navigation={true} 
				speed={600}
				loop={true}
				slidesPerView="auto"
				className="product-swiper"
			>
				{tempProducts.map((product) => (
					<SwiperSlide key={product.id}>
						<ProductCard product={product} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
})
ProductCardSwiper.displayName = "ProductCardSwiper";


// 主元件
const Home = () => {

	return (
		<>
			{/* <button type="button" className="btn">Button</button>
			<button type="button" className="btn" disabled>Button</button>
			<button type="button" className="btn btn-outline">Button</button>
			<button type="button" className="btn btn-icon">立即選購<span class="material-symbols-outlined">arrow_forward_ios</span></button>
			<button type="button" className="btn btn-outline btn-icon">立即選購<span class="material-symbols-outlined">arrow_forward_ios</span></button> */}

			{/* Hero Section */}
			{/* <HeroSwiper banners={banners} onNavigate={handleNavigate} /> */}
			<HeroSwiper banners={banners} />


			{/* Products Section */}
			<section className="bg-primary-60 pt-10 lg:pt-25 pb-8 lg:pb-22 text-center">
				<div className="container">
					<h2 className="title"><span>推薦商品</span></h2>
					<ProductCardSwiper tempProducts={tempProducts} />
					<button type="button" className="btn btn-outline btn-icon">選購去<span class="material-symbols-outlined">arrow_forward_ios</span></button>
				</div>
			</section>
		</>
	);
};

export default Home;
