import Race from './Race';

export default class Bugbear extends Race {
	constructor() {
		super('bugbear');
		this.statMods.strength = 2;
		this.statMods.dexterity = 1;
	}
}