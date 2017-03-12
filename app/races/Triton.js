import Race from './Race';

export default class Triton extends Race {
	constructor() {
		super('triton');
		this.statMods.strength = 1;
		this.statMods.constitution = 1;
		this.statMods.charisma = 1;
	}
}