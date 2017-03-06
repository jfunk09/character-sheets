import backgroundTemplates from './backgroundTemplates';
const _ = require('underscore');

export default backgroundFactory = function (key, detailsEncoding) {
	const bgClass = _.findWhere(backgroundTemplates, {key: key}).classFunction;
	const bg = new bgClass();
	if (detailsEncoding) {
		bg.decodeDetails(detailsEncoding);
	}
	return bg;
}