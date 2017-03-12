import Race from './Race';
const _ = require('underscore');

export default class HalfElf extends Race {
	constructor() {
		super('halfElf');
		this.statMods.charisma = 2;
	}

	pickStatMods(statKeys) {
		if (statKeys.length !== 2 || _.contains(statKeys, 'charisma')) {
			throw new Error("Half Elf can only have 2 stat boosts in addition to charisma, each of 1");
		}
		this.statMods[statKeys[0]] = 1;
		this.statMods[statKeys[1]] = 1;
	}
}