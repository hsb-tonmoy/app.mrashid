const API_URL = import.meta.env.VITE_API_URL;

async function send({ method, path, data }) {
	const opts = {
		method,
		headers: {},
		credentials: 'include'
	};

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	return fetch(`${API_URL}/${path}/`, opts)
		.then((r) => r.text())
		.then((json) => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
}

export function get(path) {
	return send({ method: 'GET', path });
}

export function del(path) {
	return send({ method: 'DELETE', path });
}

export function post(path, data) {
	return send({ method: 'POST', path, data });
}

export function put(path, data) {
	return send({ method: 'PUT', path, data });
}
