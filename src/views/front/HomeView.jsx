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
import stepImg1 from "@/images/home_step1.png";
import stepImg2 from "@/images/home_step2.png";
import stepImg3 from "@/images/home_step3.png";
import stepMainImage from "@/images/home_step_main.png";

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
	{ id: 1, title: "商品名稱1", price: 1000, image: "https://placehold.co/282x307?text=Product+1" },
	{ id: 2, title: "商品名稱2", price: 2000, image: "https://placehold.co/282x307?text=Product+2" },
	{ id: 3, title: "商品名稱3", price: 3000, image: "https://placehold.co/282x307?text=Product+3" },
	{ id: 4, title: "商品名稱4", price: 4000, image: "https://placehld.co/282x307?text=Product+4" },
	{ id: 5, title: "商品名稱5", price: 5000, image: "https://placehold.co/282x307?text=Product+5" },
	{ id: 6, title: "商品名稱6", price: 6000, image: "https://placehold.co/282x307?text=Product+6" },
]

const stepData = [
	{ title: "倒入鍋中", text: "拆袋即煮，不需備料", image: stepImg1 },
	{ title: "簡單加熱", text: "中小火拌勻，約 3-5 分鐘", image: stepImg2 },
	{ title: "美味上桌", text: "即刻享受熱騰騰的家常味", image: stepImg3 },
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
		<div className="group card flex flex-col gap-3 p-3 bg-white border border-primary-40 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" onClick={() => console.log("hit")}>
			<div className="img">
				<button type="button" className="absolute w-8 h-8 grid place-items-center z-1"><span className="material-symbols-outlined text-secondary-60 transition-all duration-300 group-hover:text-primary-20 group-hover:[font-variation-settings:'FILL'_1]">favorite</span></button>
				<img src={product.image} alt={product.title} onError={handleImgError} className="product-image transition-transform duration-500 ease-out group-hover:scale-105" />
			</div>
			<div className="info">
				<h3 className="mb-1 text-secondary-50 font-medium text-xl/normal transition-colors duration-300 group-hover:text-primary-20">{product.title}</h3>
				<p className="price text-primary-20 font-bold text-2xl/tight">${product.price}</p>
			</div>
		</div>
	</>)
});
ProductCard.displayName = "ProductCard";

const ProductCardSwiper = memo(({ tempProducts }) => {
	const swiperRef = useRef(null);
	return (
		<div className="product-swiper-container mb-7 lg:mb-10">
			<Swiper
				modules={SWIPER_MODULES}
				spaceBetween={12}
				onSwiper={(swiper) => { swiperRef.current = swiper; }}
				speed={600}
				loop={true}
				slidesPerView="auto"
				breakpoints={{
					992: { slidesPerView: 4, spaceBetween: 24 },
				}}
				className="product-swiper"
			>
				{tempProducts.map((product) => (
					<SwiperSlide key={product.id}>
						<ProductCard product={product} />
					</SwiperSlide>
				))}
			</Swiper>
			<button type="button" className="swiper-button-prev hidden lg:block" aria-label="上一張" onClick={() => swiperRef.current?.slidePrev()}></button>
			<button type="button" className="swiper-button-next hidden lg:block" aria-label="下一張" onClick={() => swiperRef.current?.slideNext()}></button>
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
			<section className="bg-primary-60 relative dc-up pt-10 lg:pt-25 pb-15 lg:pb-29 text-center">
				<div className="max-w-324 mx-auto px-3 lg:px-6">
					<h2 className="title"><span>推薦商品</span></h2>
					<ProductCardSwiper tempProducts={tempProducts} />
					<button type="button" className="btn btn-outline btn-icon hover:shadow-primary-30 hover:shadow-md">選購去<span className="material-symbols-outlined">arrow_forward_ios</span></button>
				</div>
			</section>

			{/* Step Section */}
			<section className="bg-white">
				{/* upper */}
				<div className="py-10 lg:py-25">
					<div className="container">
						<div className="max-w-267.5 w-full mx-auto relative flex items-center mb-6 lg:mb-5">
							<div className="relative flex w-full justify-center before:content-none lg:before:content-[''] before:absolute before:inset-0 before:w-2.5 before:h-full before:bg-[url('@/images/dc_line.png')] before:bg-repeat-y before:bg-center">
								<div className="mx-auto max-w-full lg:max-w-121">
									<h2 className="title lg:mb-10"><span>快速家常料理包</span></h2>
									<div className="block lg:hidden aspect-square max-w-53.75 mx-auto">
										<img src={stepMainImage} alt="快速家常料理包" />
									</div>
									<h3 className="mb-3 font-bold text-secondary-50 text-xl/tight">三步驟上桌的晚餐救星，忙碌也能吃好</h3>
									<p className="text-secondary-80 mb-5 lg:mb-12">不​需要​備料、​不必​開火​很​久，​只要​倒入、​加熱、​拌​一​拌，​就​能​端出​一​盤​暖心​的​家常​好味。​​</p>
									<p className="text-secondary-80">​從​燉菜、​炒麵​到​湯品，每​一道​都​為​了​「快速​但​不將​就」​而​設計，​讓​你​下班後​也​能​好​好​吃飯。​​</p>
								</div>
							</div>
							<div className="hidden lg:block max-w-93.5 ms-auto">
								<img src={stepMainImage} alt="快速家常料理包" />
							</div>
						</div>
						<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
							{
								stepData && stepData.map((data, index) => (
									<li key={data.title} className="flex lg:flex-col p-2 lg:p-10 bg-primary-50 rounded-3xl lg:justify-center items-center  gap-6 lg:text-center">
										<div className="overflow-hidden rounded-full"><img className="h-full w-full max-w-33 lg:max-w-full object-fit-cover" src={data.image} alt={data.title} /></div>
										<div>
											<h4 className="text-primary-20 font-bold text-base/tight lg:text-xl/tight">STEP {index + 1} {data.title}</h4>
											<p className="text-secondary-50 text-base/normal">{data.text}</p>
										</div>
									</li>
								))
							}
						</ul>
					</div>
				</div>

				{/* lower */}
				<div className="py-10 lg:py-25">
					<div className="container">
						<ul></ul>
						<div></div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
