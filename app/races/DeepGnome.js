import Race from './Race';
import Gnome from './Gnome';

export default class DeepGnome extends Gnome {
	constructor() {
		super('deepGnome');
		this.statMods.dexterity = 1;
	}
}