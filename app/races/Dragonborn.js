import Race from './Race';

export default class Dragonborn extends Race {
	constructor() {
		super('dragonborn');
		this.statMods.strength = 2;
		this.statMods.charisma = 1;
	}
}