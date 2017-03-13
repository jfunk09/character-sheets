import Race from './Race';
import Human from './Human';

export default class VariantHuman extends Human {
	constructor() {
		super('variantHuman');
	}

	pickStatMods(statKeys) {
		if (statKeys.length !== 2) {
			throw new Error("Variant Human can only have 2 stat boosts, each of 1");
		}
		this.statMods[statKeys[0]] = 1;
		this.statMods[statKeys[1]] = 1;
	}
}