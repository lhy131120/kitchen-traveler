import "@/style/Home.css";

import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
const SWIPER_MODULES = [Navigation, Pagination, Autoplay, EffectFade];
const SWIPER_PAGINATION = { clickable: true, dynamicBullets: true };
const SWIPER_AUTOPLAY = { delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true };

const handleImgError = (e) => {
	e.target.src = "https://placehold.co/300x200?text=No+Image";
};

const HeroSwiper = memo(({ products, onNavigate }) => {
	return (
		<div className="swiper-container">
			<Swiper
				modules={SWIPER_MODULES}
				grabCursor={true}
				pagination={SWIPER_PAGINATION}
				navigation={true}
				autoplay={SWIPER_AUTOPLAY}
				speed={600}
				loop={true}
				slidesPerView="auto"
				centeredSlides={true}
				className="product-swiper"
			>
				{
					products.map((product) => (
						<SwiperSlide key={product.id}>
							<ProductCard product={product} onNavigate={onNavigate} />
						</SwiperSlide>
					))
				}
			</Swiper>
		</div>
	);
});
HeroSwiper.displayName = "HeroSwiper";


// 主元件
const Home = () => {
	return (
		<>
			{/* <button type="button" className="btn">Button</button>
			<button type="button" className="btn" disabled>Button</button>
			<button type="button" className="btn btn-outline">Button</button>
			<button type="button" className="btn btn-icon">立即選購<span class="material-symbols-outlined">arrow_forward_ios</span></button>
			<button type="button" className="btn btn-outline btn-icon">立即選購<span class="material-symbols-outlined">arrow_forward_ios</span></button> */}

			<Swiper
				className="hero-swiper"
				modules={SWIPER_MODULES}
				grabCursor={true}
				pagination={SWIPER_PAGINATION}
				navigation={true}
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
							<div className="container flex h-full items-center">
								<div className="hero-content">
									<h2 className="hero-text mb-5 lg:mb-12 text-secondary-50 font-bold text-4xl lg:text-6xl/tight tracking-small">
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
			</Swiper>
		</>
	);
};

export default Home;
