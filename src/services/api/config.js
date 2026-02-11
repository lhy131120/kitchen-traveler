export const API_BASE = import.meta.env.VITE_API_BASE;
export const API_PATH = import.meta.env.VITE_API_PATH;

export const getTokenFromCookies = () => {
	const name = "kitchen_traveler_token=";
	const decodedCookie = decodeURIComponent(document.cookie);
	const ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i].trim();
		if (c.indexOf(name) === 0) {
			return c.substring(name.length);
		}
	}
	return null;
};

export const clearToken = () => {
	console.log("fn: clearToken");
	document.cookie = "kitchen_traveler_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

export const setToken = (token, expired) => {
	console.log("fn: setToken", token, expired);
	clearToken();
	if (token && expired) document.cookie = `kitchen_traveler_token=${token}; expires=${new Date(expired).toUTCString()}; path=/;`;
};
