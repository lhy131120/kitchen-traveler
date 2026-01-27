import "./App.css";

function App() {
	return (
		<>
			<div className="container">
				<h1 className="text-3xl font-bold underline">Home</h1>
				{/* The button to open modal */}
				<a href="#my_modal_8" className="btn bg-primary-100">
					open modal
				</a>

				{/* Put this part before </body> tag */}
				<div className="modal" role="dialog" id="my_modal_8">
					<div className="modal-box">
						<h3 className="text-lg font-bold">Hello!</h3>
						<p className="py-4">Home</p>
						<div className="modal-action">
							<a href="#" className="btn">
								Yay!
							</a>
						</div>
					</div>
				</div>

				{/* <p className="text-6xl">測試文字</p>
				<p className="text-5xl">測試文字</p>
				<p className="text-4xl">測試文字</p>
				<p className="text-3xl">測試文字</p>
				<p className="text-2xl">測試文字</p>
				<p className="text-xl">測試文字</p>
				<p className="text-lg">測試文字</p>
				<p className="text-base">測試文字</p>
				<p className="text-sm">測試文字</p> */}
				<button className="btn btn-outline btn-primary">Primary</button>
				<button className="btn btn-outline btn-secondary">Secondary</button>
				<button className="btn btn-outline btn-accent">Accent</button>
				<button className="btn btn-outline btn-info">Info</button>
				<button className="btn btn-outline btn-success">Success</button>
				<button className="btn btn-outline btn-warning">Warning</button>
				<button className="btn btn-outline btn-error">Error</button>
			</div>
		</>
	);
}
export default App;
