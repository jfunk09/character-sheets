import Race from './Race';

export default class Tabaxi extends Race {
	constructor() {
		super('tabaxi');
		this.statMods.dexterity = 2;
		this.statMods.charisma = 1;
	}
}