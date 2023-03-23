import axios from "axios";

export const login = async (user) => {
	const response = await axios.post('http://localhost:5000/api/login', {
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