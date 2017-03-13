import raceTemplates from './raceTemplates';
const _ = require('underscore');

export default class Race {
	constructor(key) {
		this.key = key;
		const raceTemplate = _.findWhere(raceTemplates, {key: key});
		this.label = raceTemplate.label;
		this.statMods = {
			strength: 0,
			dexterity: 0,
			constitution: 0,
			intelligence: 0,
			wisdom: 0,
			charisma: 0
		};
	}

	get isIncomplete() {
		return false;
	}

	get optionsTemplate() {
		return null;
	}

	decodeDetails(str) {
		// const details = JSON.parse(str);
	}

	toSaveState() {
		return JSON.stringify(null);
	}

	// TODO: idea for racial options or any option, have option object, including key/value/callback that can be retrieved via relevant options query, and used in option picker Component
}