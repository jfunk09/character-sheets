import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight, Button, AsyncStorage } from 'react-native';
import Character from '../Character';

const CHARACTER_STORAGE_BASE = '@AsyncStorageCharactersSheets:';
function charStorageKey(key) {
	return CHARACTER_STORAGE_BASE + key;
}

export default class CharacterSheet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true
		}
	}

	componentWillMount() {
		const that = this;

		AsyncStorage.getItem(charStorageKey(this.props.name)).then(function (encodedCharacter) {
			const character = new Character(Character.fromSaveState(encodedCharacter));
			that.setState({
				isLoading: false,
				character: character
			});
		});
	}

	displayStat(statKey) {
		const base = this.state.character[statKey];
		const mod = this.state.character.race.statMods[statKey];
		return base + mod;
	}

	render () {
		if (this.state.isLoading) {
			return (
				<View><Text>Loading...</Text></View>
			);
		}
		return (
			<View style={styles.characterSheet}>
				<View style={styles.headerRow}>
					<TouchableHighlight
						style={styles.backButton}
						underlayColor="#f0f0f0"
						onPress={this.props.toCharacterSelect}>
						<Text style={styles.backButtonText}>&lt;</Text>
					</TouchableHighlight>
					<Text style={styles.characterName}>{this.state.character.name}</Text>
					<TouchableHighlight
						style={styles.deleteButton}
						underlayColor="#b44444"
						onPress={this.props.deleteCharacter.bind(null, this.props.name)}>
						<Text style={styles.deleteButtonText}>&times;</Text>
					</TouchableHighlight>
				</View>
				<View>
					<Text>{this.state.character.raceKey} ({this.state.character.background.label})</Text>
				</View>
				<View style={styles.bgRow}>
					<TouchableHighlight
						style={styles.bgButton}
						underlayColor="#cccca6"
						onPress={this.props.toCharacterSelect}>
						<Text style={styles.bgButtonText}>{this.state.character.background.featureDescription}</Text>
					</TouchableHighlight>
				</View>
				<View style={styles.statRow}>
					<View style={styles.statBin}>
						<Text style={styles.statLabel}>Strength:</Text>
						<Text style={styles.statValue}>{this.displayStat('strength')}</Text>
					</View>
					<View style={styles.statBin}>
						<Text style={styles.statLabel}>Dexterity:</Text>
						<Text style={styles.statValue}>{this.displayStat('dexterity')}</Text>
					</View>
					<View style={styles.statBin}>
						<Text style={styles.statLabel}>Constitution:</Text>
						<Text style={styles.statValue}>{this.displayStat('constitution')}</Text>
					</View>
				</View>
				<View style={styles.statRow}>
					<View style={styles.statBin}>
						<Text style={styles.statLabel}>Intelligence:</Text>
						<Text style={styles.statValue}>{this.displayStat('intelligence')}</Text>
					</View>
					<View style={styles.statBin}>
						<Text style={styles.statLabel}>Wisdom:</Text>
						<Text style={styles.statValue}>{this.displayStat('wisdom')}</Text>
					</View>
					<View style={styles.statBin}>
						<Text style={styles.statLabel}>Charisma:</Text>
						<Text style={styles.statValue}>{this.displayStat('charisma')}</Text>
					</View>
				</View>
			</View>
		)
	}
}

CharacterSheet.propTypes = {
	name: PropTypes.string.isRequired,
	toCharacterSelect: PropTypes.func.isRequired,
	deleteCharacter: PropTypes.func.isRequired
};

/*
 * === STYLES ===
 */
const styles = StyleSheet.create({
	characterSheet: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
	},
	headerRow: {
		flex:1,
		flexDirection: 'row'
	},
	backButton: {
		flex: 1
	},
	backButtonText: {
		fontSize: 32,
		textAlign: 'center',
	},
	deleteButton: {
		flex: 1
	},
	deleteButtonText: {
		fontSize: 32,
		textAlign: 'center'
	},
	characterName: {
		flex: 6,
		fontSize: 28,
		textAlign: 'center'
	},
	statRow: {
		flex: 5,
		flexDirection: 'row'
	},
	statBin: {
		flex: 1
	},
	statLabel: {
		flex: 1
	},
	statValue: {
		flex: 2,
		fontSize: 24
	},
	bgRow: {
		flex: 1
	},
	bgButton: {
		flex: 1
	},
	bgButtonText: {
		fontSize: 18
	}
});
