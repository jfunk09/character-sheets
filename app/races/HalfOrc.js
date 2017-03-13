import Race from './Race';

export default class HalfOrc extends Race {
	constructor() {
		super('halfOrc');
		this.statMods.strength = 2;
		this.statMods.constitution = 1;
	}
}