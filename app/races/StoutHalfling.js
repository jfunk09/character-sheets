import Race from './Race';
import Halfling from './Halfling';

export default class StoutHalfling extends Halfling {
	constructor() {
		super('stoutHalfling');
		this.statMods.constitution = 1;
	}
}