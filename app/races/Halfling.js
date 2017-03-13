import Race from './Race';
import raceTemplates from './raceTemplates';

export default class Halfling extends Race {
	constructor(subKey) {
		super('halfling');
		this.statMods.dexterity = 2;
		this.subKey = subKey;
	}
}