import Race from './Race';
import Genasi from './Genasi';

export default class WaterGenasi extends Genasi {
	constructor() {
		super('waterGenasi');
		this.statMods.wisdom = 1;
	}
}