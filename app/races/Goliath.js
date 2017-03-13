import Race from './Race';

export default class Goliath extends Race {
	constructor() {
		super('goliath');
		this.statMods.strength = 2;
		this.statMods.constitution = 1;
	}
}