import Race from './Race';
import raceTemplates from './raceTemplates';

export default class Tiefling extends Race {
	constructor(subKey) {
		super('tiefling');
		this.subKey = subKey;
	}
}