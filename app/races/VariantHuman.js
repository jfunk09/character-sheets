import Race from './Race';
import comps from '../components';
const _ = require('underscore');
import Human from './Human';

const statOptions = [
	{key: 'strength', label: 'Strength'},
	{key: 'dexterity', label: 'Dexterity'},
	{key: 'constitution', label: 'Constitution'},
	{key: 'intelligence', label: 'Intelligence'},
	{key: 'wisdom', label: 'Wisdom'},
	{key: 'charisma', label: 'Charisma'}
];

export default class VariantHuman extends Human {
	constructor() {
		super('variantHuman');
		this.selectedMod1 = null;
		this.selectedMod2 = null;
	}

	get isIncomplete() {
		return !this.selectedMod1 || !this.selectedMod2;
	}

	get optionsTemplate() {
		return [{
			component: comps.RacialStatPicker,
			options: statOptions,
			onSave: this.setSelectedMods
		}];
	}

	resetSelectedMods() {
		_.each(statOptions, (stat) => {
			this.statMods[stat.key] = 0;
		});
	}

	setSelectedMods(statKey1, statKey2) {
		this.selectedMod1 = statKey1;
		this.selectedMod2 = statKey2;
		this.resetSelectedMods();
		this.statMods[statKey1] = 1;
		this.statMods[statKey2] = 1;
	}

	decodeDetails(str) {
		const details = JSON.parse(str);
		if (details) {
			this.setSelectedMods(details.selectedMod1, details.selectedMod2);
		}
	}

	toSaveState() {
		return JSON.stringify({
			selectedMod1: this.selectedMod1,
			selectedMod2: this.selectedMod2
		});
	}
}