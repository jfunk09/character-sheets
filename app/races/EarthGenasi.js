import Race from './Race';
import Genasi from './Genasi';

export default class EarthGenasi extends Genasi {
	constructor() {
		super('earthGenasi');
		this.statMods.strength = 1;
	}
}