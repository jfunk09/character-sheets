import classTemplates from './classTemplates';

export default class CharacterClass {
	constructor(key) {
		this.key = key;
		const classTemplate = _.findWhere(classTemplates, {key: key});
		this.label = classTemplate.label;
	}
}