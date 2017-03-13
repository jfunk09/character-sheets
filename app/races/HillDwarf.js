import Race from './Race';
import Dwarf from './Dwarf';

export default class HillDwarf extends Dwarf {
	constructor() {
		super('hillDwarf');
		this.statMods.wisdom = 1;
	}
}