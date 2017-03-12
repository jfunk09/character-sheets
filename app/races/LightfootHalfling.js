import Race from './Race';
import Halfling from './Halfling';

export default class LightfootHalfling extends Halfling {
	constructor() {
		super('lightfootHalfling');
		this.statMods.charisma = 1;
	}
}