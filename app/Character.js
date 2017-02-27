export default class Character {
	constructor(json) {
		this.name = json.name;
		this.strength = parseInt(json.strength);
		this.dexterity = parseInt(json.dexterity);
		this.constitution = parseInt(json.constitution);
		this.intelligence = parseInt(json.intelligence);
		this.wisdom = parseInt(json.wisdom);
		this.charisma = parseInt(json.charisma);
	}

	toSaveState() {
		return JSON.stringify({
			name: this.name,
			strength: this.strength,
			dexterity: this.dexterity,
			constitution: this.constitution,
			intelligence: this.intelligence,
			wisdom: this.wisdom,
			charisma: this.charisma
		});
	}

	static fromSaveState(str) {
		const json = JSON.parse(str);
		return json;
	}
}