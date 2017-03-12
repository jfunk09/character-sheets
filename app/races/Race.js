import raceTemplates from './raceTemplates';
const _ = require('underscore');

export default class Race {
	constructor(key) {
		this.key = key;
		const raceTemplate = _.findWhere(raceTemplates, {key: key});
		this.label = raceTemplate.label;
		this.statMods = [];
	}

	decodeDetails(str) {
		const details = JSON.parse(str);
	}

	toSaveState() {
		return '';
	}

	// TODO: idea for racial options or any option, have option object, including key/value/callback that can be retrieved via relevant options query, and used in option picker Component
}