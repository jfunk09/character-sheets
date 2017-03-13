import backgroundTemplates from './backgroundTemplates';
const _ = require('underscore');

export default class Background {
	constructor(key) {
		this.key = key;
		const backgroundTemplate = _.findWhere(backgroundTemplates, {key: key});
		this.label = backgroundTemplate.label;
		this.featureIndex = 0;
		this.features = backgroundTemplate.featureOptions;
		this.skillProficiencies = [];
		this.otherProficiencies = [];
	}

	get featureDescription() {
		return this.features[this.featureIndex].description;
	}

	decodeDetails(str) {
		const details = JSON.parse(str);
		this.featureIndex = parseInt(details.featureIndex);
	}

	toSaveState() {
		return JSON.stringify({
			featureIndex: this.featureIndex
		});
	}
}