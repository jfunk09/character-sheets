import Race from './Race';

export default class Hobgoblin extends Race {
	constructor() {
		super('hobgoblin');
		this.statMods.constitution = 2;
		this.statMods.intelligence = 1;
	}
}