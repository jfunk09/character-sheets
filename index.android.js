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

		AsyncStorage.getItem(CHARACTER_STORAGE_NAMES).then(function (charString) {
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
			characterSelect: { title: 'Character Select', index: 2, scene: comps.CharacterSelect },
			characterSheet: { title: 'Character Sheet', index: 3, scene: comps.CharacterSheet }
		};

		function simpleStateUpdateFn(key) {
			return function (val) {
				const newState = _.extend({}, that.state);
				newState[key] = val;
				that.setState(newState);
				AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
			}
		}

		return (
			<Navigator
				initialRoute={routes.characterSelect}
				renderScene={function (route, navigator) {
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
									return;
								}}
							/>;
							break;
						case 'Character Sheet':
							return <routes.characterSheet.scene
								name={that.state.selectedCharacter}
								toCharacterSelect={() => {
									navigator.popToTop()
								}}
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
							/>;
					}
				}}
			/>
		);
	}
}

AppRegistry.registerComponent('CharacterSheets', () => CharacterSheets);