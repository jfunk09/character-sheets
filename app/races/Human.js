import Race from './Race';
import raceTemplates from './raceTemplates';

export default class Human extends Race {
	constructor(subKey) {
		super('human');
		this.subKey = subKey;
	}
}