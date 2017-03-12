import Race from './Race';
import Tiefling from './Tiefling';

export default class RegularTiefling extends Tiefling {
	constructor() {
		super('regularTiefling');
		this.statMods.charisma = 2;
	}
}