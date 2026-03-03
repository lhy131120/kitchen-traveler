const Home = () => {
	return (
		<>
			<button type="button" className="btn">Button</button>
			<button type="button" className="btn" disabled>Button</button>
			<button type="button" className="btn btn-outline">Button</button>
			<button type="button" className="btn btn-icon">立即選購<span class="material-symbols-outlined">arrow_forward_ios</span></button>
			<button type="button" className="btn btn-outline btn-icon">立即選購<span class="material-symbols-outlined">arrow_forward_ios</span></button>
		</>
	);
};

export default Home;
