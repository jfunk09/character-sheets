import Race from './Race';

export default class Kobold extends Race {
	constructor() {
		super('kobold');
		this.statMods.strength = -2;
		this.statMods.dexterity = 2;
	}
}