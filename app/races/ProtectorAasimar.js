import Race from './Race';
import Aasimar from './Aasimar';

export default class ProtectorAasimar extends Aasimar {
	constructor() {
		super('ProtectorAasimar');
		this.statMods.wisdom = 1;
	}
}