import Race from './Race';
import Dwarf from './Dwarf';

export default class MountainDwarf extends Dwarf {
	constructor() {
		super('mountainDwarf');
		this.statMods.strength = 2;
	}
}