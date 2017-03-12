import Race from './Race';

export default class YuanTi extends Race {
	constructor() {
		super('yuanTi');
		this.statMods.intelligence = 1;
		this.statMods.charisma = 2;
	}
}