import Race from './Race';
import raceTemplates from './raceTemplates';

export default class Halfling extends Race {
	constructor(subKey) {
		super('halfling');
		this.subKey = subKey;
	}
}