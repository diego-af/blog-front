class AuthToken extends Error {
	constructor() {
		super('Invalid token');
	}
}

export {AuthToken};
