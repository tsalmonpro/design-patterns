class MonaLisaPainting {
	private static painting: MonaLisaPainting;

	private constructor() {}

	static get instance(): MonaLisaPainting {
		if(!this.painting) {
			this.painting = new MonaLisaPainting();
		}

		return this.painting;
	}
}

export default MonaLisaPainting;