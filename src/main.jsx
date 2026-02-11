import { createRoot } from "react-dom/client";
import App from "@/App.jsx";

// Common Plugins
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Style
import "@/style/Theme.css";
import "@/style/Main.css";

createRoot(document.getElementById("root")).render(
	<>
		<App />
		<ToastContainer
			position="top-right" // 位置：top-right / bottom-center 等
			autoClose={2000} // 自動關閉時間 (ms)，設 0 則不自動關
			hideProgressBar={false} // 是否隱藏進度條
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="colored" // light / dark / colored
			transition={Bounce} // 可選：Flip / Bounce / Zoom 等動畫
		/>
	</>
);
