import Race from './Race';

export default class Firbolg extends Race {
	constructor() {
		super('firbolg');
		this.statMods.strength = 1;
		this.statMods.wisdom = 2;
	}
}