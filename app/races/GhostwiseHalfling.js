import Race from './Race';
import Halfling from './Halfling';

export default class GhostwiseHalfling extends Halfling {
	constructor() {
		super('ghostwiseHalfling');
		this.statMods.wisdom = 1;
	}
}