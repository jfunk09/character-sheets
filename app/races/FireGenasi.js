import Race from './Race';
import Genasi from './Genasi';

export default class FireGenasi extends Genasi {
	constructor() {
		super('fireGenasi');
		this.statMods.intelligence = 1;
	}
}