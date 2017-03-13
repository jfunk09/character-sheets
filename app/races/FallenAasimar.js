import Race from './Race';
import Aasimar from './Aasimar';

export default class FallenAasimar extends Aasimar {
	constructor() {
		super('fallenAasimar');
		this.statMods.strength = 1;
	}
}