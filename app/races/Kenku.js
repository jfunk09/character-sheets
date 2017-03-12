import Race from './Race';

export default class Kenku extends Race {
	constructor() {
		super('kenku');
		this.statMods.dexterit = 2;
		this.statMods.wisdom = 1;
	}
}