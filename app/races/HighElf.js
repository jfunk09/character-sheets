import Race from './Race';
import Elf from './Elf';

export default class HighElf extends Elf {
	constructor() {
		super('highElf');
		this.statMods.intelligence = 1;
	}
}