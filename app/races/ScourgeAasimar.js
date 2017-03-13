import Race from './Race';
import Aasimar from './Aasimar';

export default class ScourgeAasimar extends Aasimar {
	constructor() {
		super('scourgeAasimar');
		this.statMods.constitution = 1;
	}
}