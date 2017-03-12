import Race from './Race';
import raceTemplates from './raceTemplates';

export default class Dwarf extends Race {
	constructor(subKey) {
		super('dwarf');
		this.subKey = subKey;
	}
}