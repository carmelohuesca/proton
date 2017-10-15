import { StringExtended } from './string-extended';

export class Proton {

	static instance: Proton;

	static createInstance(): Proton {
		if (!Proton.instance) {
			Proton.instance = Proton.loadPrototypes();
		}
		return Proton.instance;
	}

	static loadPrototypes(): any {
		return Proton.prototype;
	}

	static string = StringExtended;

	constructor() {
		return Proton.createInstance();
	}

}
