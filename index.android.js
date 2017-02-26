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
const _ = require('underscore');

const STORAGE_KEY = '@AsyncStorageCharacterSheets:key';
const CHARACTER_STORAGE_NAMES = '@AsyncStorageCharactersSheets:names';
const CHARACTER_STORAGE_BASE = '@AsyncStorageCharactersSheets:';

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
				selectedCharacter: null,
				isLoading: false
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

		function updateCharacterList(action, name) {
			let newCharacterList;
			if (action === 'add') {
				newCharacterList = that.state.characters.concat(name);
			} else if (action === 'remove') {
				newCharacterList = _.without(that.state.characters, name);
			}
			return AsyncStorage.setItem(CHARACTER_STORAGE_NAMES, JSON.stringify(newCharacterList)).then(() => {
				that.setState({
					characters: newCharacterList
				});
			});
		}

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
										selectedCharacter: name
									});
									navigator.push(routes.characterSheet)
								}}
								addCharacter={() => {
									navigator.push(routes.createCharacter)
								}}
							/>;
							break;
						case 'Character Sheet':
							return <routes.characterSheet.scene
								name={that.state.selectedCharacter}
								toCharacterSelect={() => {
									navigator.popToTop()
								}}
								deleteCharacter={(name) => {
									updateCharacterList('remove', name).then(() => {
										navigator.popToTop();
									});
								}}
							/>;
							break;
						case 'Create Character':
							return <routes.createCharacter.scene
								create={(name) => {
									const inUse = _.contains(that.state.characters, name);
									if (inUse) {
										return true;
									} else {
										updateCharacterList('add', name).then(() => {
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
										selectedCharacter: name
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