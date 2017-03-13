import Race from './Race';
import Elf from './Elf';

export default class DarkElf extends Elf {
	constructor() {
		super('darkElf');
		this.statMods.charisma = 1;
	}
}