import "./App.css";

function App() {
	return (
		<>
			<h1 className="text-3xl font-bold underline">text-3xl font-bold underline</h1>
			<button className="btn btn-xs">Xsmall</button>
			<button className="btn btn-sm">Small</button>
			<button className="btn">Medium</button>
			<button className="btn btn-lg">Large</button>
			<button className="btn btn-xl">Xlarge</button>
			{/* The button to open modal */}
			<a href="#my_modal_8" className="btn">
				open modal
			</a>

			{/* Put this part before </body> tag */}
			<div className="modal" role="dialog" id="my_modal_8">
				<div className="modal-box">
					<h3 className="text-lg font-bold">Hello!</h3>
					<p className="py-4">This modal works with anchor links</p>
					<div className="modal-action">
						<a href="#" className="btn">
							Yay!
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
export default App;
