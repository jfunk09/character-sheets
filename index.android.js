import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Navigator,
	TouchableHighlight,
	AsyncStorage
} from 'react-native';
import comps from './app/components';
import Character from './app/Character';
const _ = require('underscore');
const Q = require('q');

const STORAGE_KEY = '@AsyncStorageCharacterSheets:key';
const CHARACTER_STORAGE_NAMES = '@AsyncStorageCharactersSheets:names';
const CHARACTER_STORAGE_BASE = '@AsyncStorageCharactersSheets:';

function charStorageKey(key) {
	return CHARACTER_STORAGE_BASE + key;
}

/*
 * === Components ===
 */
class CharacterSheets extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true
		};
	}

	componentWillMount() {
		const that = this;

		AsyncStorage.getItem(CHARACTER_STORAGE_NAMES).then((charString) => {
			const characters = JSON.parse(charString);
			that.setState({
				characters: characters || [],
				selectedCharacterName: null,
				isLoading: false
			});
		});
	}

	createNewCharacter(json) {
		const character = new Character(json);
		return Q.all([
			this.updateCharacterList('add', json.name),
			AsyncStorage.setItem(charStorageKey(json.name), character.toSaveState())
		]);
	}

	removeCharacter(name) {
		return Q.all([
			this.updateCharacterList('remove', name),
			AsyncStorage.removeItem(charStorageKey(name))
		]);
	}

	updateCharacterList(action, name) {
		let newCharacterList;
		if (action === 'add') {
			newCharacterList = this.state.characters.concat(name);
		} else if (action === 'remove') {
			newCharacterList = _.without(this.state.characters, name);
		}
		return AsyncStorage.setItem(CHARACTER_STORAGE_NAMES, JSON.stringify(newCharacterList)).then(() => {
			this.setState({
				characters: newCharacterList
			});
		});
	}

	render() {
		if (this.state.isLoading) {
			return (
				<View><Text>Loading...</Text></View>
			);
		}

		const that = this;
		const routes = {
			characterSelect: { title: 'Character Select', scene: comps.CharacterSelect },
			characterSheet: { title: 'Character Sheet', scene: comps.CharacterSheet },
			createCharacter: { title: 'Create Character', scene: comps.CreateCharacter }
		};

		return (
			<Navigator
				initialRoute={routes.characterSelect}
				renderScene={(route, navigator) => {
					switch(route.title) {
						case 'Character Select':
							return <routes.characterSelect.scene
								characters={that.state.characters}
								selectCharacter={(name) => {
									that.setState({
										selectedCharacterName: name
									});
									navigator.push(routes.characterSheet);
								}}
								addCharacter={() => {
									navigator.push(routes.createCharacter)
								}}
							/>;
							break;
						case 'Character Sheet':
							return <routes.characterSheet.scene
								name={that.state.selectedCharacterName}
								toCharacterSelect={() => {
									navigator.popToTop()
								}}
								deleteCharacter={(name) => {
									that.removeCharacter(name).then(() => {
										navigator.popToTop();
									});
								}}
							/>;
							break;
						case 'Create Character':
							return <routes.createCharacter.scene
								create={(json) => {
									const inUse = _.contains(that.state.characters, json.name) || json.name === '';
									if (inUse) {
										return true;
									} else {
										that.createNewCharacter(json).then(() => {
											navigator.popToTop();
										});
									}
								}}
								cancel={() => navigator.popToTop()}
							/>;
							break;
						default:
							return <routes.characterSelect.scene
								characters={that.state.characters}
								selectCharacter={(name) => {
									that.setState({
										selectedCharacterName: name
									});
									navigator.push(routes.characterSheet)
								}}
								addCharacter={() => {
									navigator.push(routes.createCharacter)
								}}
							/>;
					}
				}}
			/>
		);
	}
}

AppRegistry.registerComponent('CharacterSheets', () => CharacterSheets);