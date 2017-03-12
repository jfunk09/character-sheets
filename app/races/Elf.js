import Race from './Race';
import raceTemplates from './raceTemplates';

export default class Elf extends Race {
	constructor(subKey) {
		super('elf');
		this.subKey = subKey;
		this.statMods.dexterity = 2;
	}
}