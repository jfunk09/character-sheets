import raceTemplates from './raceTemplates';
const _ = require('underscore');

export default raceFactory = function (key, subKey, detailsEncoding) {
	let raceTemplate = _.findWhere(raceTemplates, {key: key});
	if (raceTemplate.subRaces && subKey) {
		raceTemplate = _.findWhere(raceTemplate.subRaces, {key: subKey});
	}
	const raceClass = raceTemplate.classFunction;
	const race = new raceClass();
	if (detailsEncoding && race.decodeDetails) {
		race.decodeDetails(detailsEncoding);
	}
	return race;
}