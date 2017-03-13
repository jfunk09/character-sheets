import Race from './Race';
import Elf from './Elf';

export default class WoodElf extends Elf {
	constructor() {
		super('woodElf');
		this.statMods.wisdom = 1;
	}
}