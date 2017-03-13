import Race from './Race';

export default class Lizardfolk extends Race {
	constructor() {
		super('lizardfolk');
		this.statMods.constitution = 2;
		this.statMods.wisdom = 1;
	}
}