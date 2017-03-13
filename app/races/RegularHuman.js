import Race from './Race';
import Human from './Human';

export default class RegularHuman extends Human {
	constructor() {
		super('regularHuman');
		this.statMods.strength = 1;
		this.statMods.dexterity = 1;
		this.statMods.constitution = 1;
		this.statMods.intelligence = 1;
		this.statMods.wisdom = 1;
		this.statMods.charisma = 1;
	}
}