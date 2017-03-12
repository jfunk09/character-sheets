import Race from './Race';
import raceTemplates from './raceTemplates';

export default class Aasimar extends Race {
	constructor(subKey) {
		super('aasimar');
		this.subKey = subKey;
	}
}