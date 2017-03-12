import Race from './Race';
import raceTemplates from './raceTemplates';

export default class Gnome extends Race {
	constructor(subKey) {
		super('gnome');
		this.statMods.intelligence = 2;
		this.subKey = subKey;
	}
}