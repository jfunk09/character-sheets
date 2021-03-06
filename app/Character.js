import backgroundFactory from './backgrounds/backgroundFactory';
import raceFactory from './races/raceFactory';

export default class Character {
	constructor(json) {
		this.name = json.name;
		this.strength = parseInt(json.strength);
		this.dexterity = parseInt(json.dexterity);
		this.constitution = parseInt(json.constitution);
		this.intelligence = parseInt(json.intelligence);
		this.wisdom = parseInt(json.wisdom);
		this.charisma = parseInt(json.charisma);
		this.raceKey = json.raceKey;
		this.subRaceKey = json.subRaceKey;
		this.race = raceFactory(json.raceKey, json.subRaceKey, json.raceSaveState);
		this.backgroundKey = json.backgroundKey;
		this.background = backgroundFactory(json.backgroundKey, json.backgroundSaveState);
	}

	toSaveState() {
		return JSON.stringify({
			name: this.name,
			strength: this.strength,
			dexterity: this.dexterity,
			constitution: this.constitution,
			intelligence: this.intelligence,
			wisdom: this.wisdom,
			charisma: this.charisma,
			raceKey: this.raceKey,
			subRaceKey: this.subRaceKey,
			raceSaveState: this.race ? this.race.toSaveState() : null,
			backgroundKey: this.backgroundKey,
			backgroundSaveState: this.background ? this.background.toSaveState() : null
		});
	}

	static fromSaveState(str) {
		const json = JSON.parse(str);
		return json;
	}
}