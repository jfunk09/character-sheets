import Race from './Race';
import Tiefling from './Tiefling';

export default class FeralTiefling extends Tiefling {
	constructor() {
		super('feralTiefling');
		this.statMods.dexterity = 2;
	}
}