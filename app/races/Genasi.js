import Race from './Race';
import raceTemplates from './raceTemplates';

export default class Genasi extends Race {
	constructor(subKey) {
		super('genasi');
		this.statMods.constitution = 2;
		this.subKey = subKey;
	}
}