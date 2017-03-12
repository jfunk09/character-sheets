import Race from './Race';

export default class Orc extends Race {
	constructor() {
		super('orc');
		this.statMods.strength = 2;
		this.statMods.constitution = 1;
		this.statMods.intelligence = -2;
	}
}