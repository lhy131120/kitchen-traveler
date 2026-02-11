import axios from "axios";
import { API_BASE, API_PATH, getTokenFromCookies } from "./config";
import { toast } from "react-toastify";

// Loading
let loadingController = {
	show: () => {},
	hide: () => {},
	forceHide: () => {},
};

const pendingRequests = new Set();

// export const injectLoadingController = (controller) => {
//   loadingController = controller;
// }

export const api = axios.create({
	baseURL: `${API_BASE}/api/${API_PATH}`,
	timeout: 10000,
	withCredentials: true,
});

export const plainApi = axios.create({
	baseURL: API_BASE,
	timeout: 10000,
	withCredentials: true,
});

const requestInterceptor = (config) => {
	console.log("fn: requestInterceptor", config);
	const token = getTokenFromCookies();
	if (token) {
		config.headers.Authorization = `${token}`;
	}

	// For loading state management ...

	return config;
};

const responseSuccessHandler = (response) => {
  console.log("fn: responseSuccessHandler", response);

  const { config } = response;

  console.log(config._requestId);

  if(config._requestId) {
		pendingRequests.delete(config._requestId);

		// 所有請求完成時隱藏 loading
		if (pendingRequests.size === 0) {
			loadingController.hide();
		}
	}
  return response;
};

const responseErrorHandler = (error) => {
	// console.log("fn: responseErrorHandler", error);

	const { config, response } = error;
  console.log(config._requestId);
	// 移除 pending 請求
	if (config._requestId) {
		pendingRequests.delete(config._requestId);

		if (pendingRequests.size === 0) {
			loadingController.hide();
		}
	}

	// 401 處理
	if (response?.status === 401) {
		toast.warn("Token 無效或過期，需重新登入");
		document.cookie = "kitchen_traveler_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		window.location.href = `${import.meta.env.BASE_URL}#/login`;
	}

	return Promise.reject(error);
};

api.interceptors.request.use(requestInterceptor);
plainApi.interceptors.request.use(requestInterceptor);

api.interceptors.response.use(responseSuccessHandler, responseErrorHandler);
plainApi.interceptors.response.use(responseSuccessHandler, responseErrorHandler);

