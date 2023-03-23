import axios from "axios";

export const login = async (user) => {
	const response = await axios.post('https://light-sweatsuit-mite.cyclic.app/api/login', {
		email: user.email,
		password: user.password
	});

	const token = response.data.token;
	if (token) {
		localStorage.setItem('jwt', JSON.stringify(token));
	}

	return response
};

export const isAuthenticated = () => {
	const jwt = localStorage.getItem('jwt');
	if (!jwt) {
		return
	}
	return JSON.parse(jwt);
};