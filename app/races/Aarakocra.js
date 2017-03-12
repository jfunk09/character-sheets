import Race from './Race';

export default class Aarakocra extends Race {
	constructor() {
		super('aarakocra');
		this.statMods.dexterity = 2;
		this.statMods.wisdom = 1;
	}
}