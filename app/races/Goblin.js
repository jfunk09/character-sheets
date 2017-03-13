import Race from './Race';

export default class Goblin extends Race {
	constructor() {
		super('goblin');
		this.statMods.dexterity = 2;
		this.statMods.constitution = 1;
	}
}