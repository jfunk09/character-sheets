import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight, Button, TextInput, Picker } from 'react-native';
import raceTemplates from '../races/raceTemplates';
import backgroundKeys from '../backgrounds/backgroundTemplates';

const Item = Picker.Item;
const _ = require('underscore');

const NO_SUB_RACE = {
	key: 'none',
	label: '-none-'
};

export default class CreateCharacter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			test: 'test',
			strength: '12',
			dexterity: '12',
			constitution: '12',
			intelligence: '12',
			wisdom: '12',
			charisma: '12',
			raceKey: raceTemplates[0].key,
			subRaceKey: raceTemplates[0].subRaces ? raceTemplates[0].subRaces[0].key : NO_SUB_RACE.key,
			backgroundKey: backgroundKeys[0].key
		};
	}

	getCurrentSubRaces(raceKey) {
		const race = _.findWhere(raceTemplates, {key: raceKey});
		return race.subRaces ? race.subRaces : [NO_SUB_RACE];
	}

	render () {
		const that = this;
		function createCharacter() {
			const raceKey = that.state.subRaceKey !== 'none' ? that.state.subRaceKey : that.state.raceKey;
			const characterJson = {
				name: that.state.name,
				strength: that.state.strength,
				dexterity: that.state.dexterity,
				constitution: that.state.constitution,
				intelligence: that.state.intelligence,
				wisdom: that.state.wisdom,
				charisma: that.state.charisma,
				raceKey: raceKey,
				backgroundKey: that.state.backgroundKey
			};
			that.props.create(characterJson)
		}
		function onStatChange(statKey, statValue) {
			const update = {};
			update[statKey] = statValue;
			that.setState(update);
		}
		function onRaceChange(raceKey) {
			const subRaces = that.getCurrentSubRaces(raceKey);
			const update = {
				raceKey: raceKey,
				subRaceKey: subRaces ? subRaces[0].key : NO_SUB_RACE.key
			};
			that.setState(update);
		}
		function onSubRaceChange(subRaceKey) {
			that.setState({subRaceKey: subRaceKey});
		}
		function onBGChange(backgroundKey) {
			that.setState({backgroundKey: backgroundKey});
		}

		const statOptions = _.map(['18', '17', '16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3'], (num) => {
			return <Item key={num} label={num} value={num} />
		});
		const raceOptions = _.map(raceTemplates, (race) => {
			return <Item key={race.key} label={race.label} value={race.key} />
		});
		const subRaceOptions = _.map(this.getCurrentSubRaces(this.state.raceKey), (subRace) => {
			return <Item key={subRace.key} label={subRace.label} value={subRace.key} />
		});
		const bgOptions = _.map(backgroundKeys, (bg) => {
			return <Item key={bg.key} label={bg.label} value={bg.key} />
		});

		return (
			<View style={styles.addSheet}>
				<View style={styles.nameField}>
					<TextInput
						placeholder='Enter character name here'
						onChangeText={(text) => {this.setState({name: text})}}
						style={styles.charNameField}
					/>
				</View>

				<View style={styles.statPickers}>
					<View style={{flex: 1}}>
						<Text style={styles.pickerLabel}>STRENGTH</Text>
						<Picker
							style={styles.picker}
							mode='dropdown'
							selectedValue={this.state.strength}
							onValueChange={onStatChange.bind(this, 'strength')}>
							{statOptions}
						</Picker>
					</View>
					<View style={{flex: 1}}>
						<Text style={styles.pickerLabel}>DEXTERITY</Text>
						<Picker
							style={styles.picker}
							mode='dropdown'
							selectedValue={this.state.dexterity}
							onValueChange={onStatChange.bind(this, 'dexterity')}>
							{statOptions}
						</Picker>
					</View>
					<View style={{flex: 1}}>
						<Text style={styles.pickerLabel}>CONSTITUTION</Text>
						<Picker
							style={styles.picker}
							mode='dropdown'
							selectedValue={this.state.constitution}
							onValueChange={onStatChange.bind(this, 'constitution')}>
							{statOptions}
						</Picker>
					</View>
				</View>

				<View style={styles.statPickers}>
					<View style={{flex: 1}}>
						<Text style={styles.pickerLabel}>INTELLIGENCE</Text>
						<Picker
							style={styles.picker}
							mode='dropdown'
							selectedValue={this.state.intelligence}
							onValueChange={onStatChange.bind(this, 'intelligence')}>
							{statOptions}
						</Picker>
					</View>
					<View style={{flex: 1}}>
						<Text style={styles.pickerLabel}>WISDOM</Text>
						<Picker
							style={styles.picker}
							mode='dropdown'
							selectedValue={this.state.wisdom}
							onValueChange={onStatChange.bind(this, 'wisdom')}>
							{statOptions}
						</Picker>
					</View>
					<View style={{flex: 1}}>
						<Text style={styles.pickerLabel}>CHARISMA</Text>
						<Picker
							style={styles.picker}
							mode='dropdown'
							selectedValue={this.state.charisma}
							onValueChange={onStatChange.bind(this, 'charisma')}>
							{statOptions}
						</Picker>
					</View>
				</View>

				<View style={styles.racePickers}>
					<View style={{flex: 1}}>
						<Text style={styles.pickerLabel}>RACE</Text>
						<Picker
							style={styles.picker}
							selectedValue={this.state.raceKey}
							onValueChange={onRaceChange}>
							{raceOptions}
						</Picker>
					</View>
					<View style={{flex: 1}}>
						<Text style={styles.pickerLabel}>SUBRACE</Text>
						<Picker
							style={styles.picker}
							selectedValue={this.state.subRaceKey}
							onValueChange={onSubRaceChange}>
							{subRaceOptions}
						</Picker>
					</View>
				</View>

				<View style={styles.backgroundPicker}>
					<View style={{flex: 1}}>
						<Text style={styles.pickerLabel}>BACKGROUND</Text>
						<Picker
							style={styles.picker}
							selectedValue={this.state.backgroundKey}
							onValueChange={onBGChange}>
							{bgOptions}
						</Picker>
					</View>
				</View>

				<View style={styles.buttonContainer}>
					<TouchableHighlight
						style={styles.createButton}
						onPress={createCharacter}>
						<Text style={styles.buttonText}>Create</Text>
					</TouchableHighlight>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableHighlight
						style={styles.cancelButton}
						onPress={this.props.cancel}>
						<Text style={styles.buttonText}>Cancel</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}

CreateCharacter.propTypes = {
	create: PropTypes.func.isRequired,
	cancel: PropTypes.func.isRequired
};

/*
 * === STYLES ===
 */
const styles = StyleSheet.create({
	addSheet: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#b2f9c5',
	},
	nameField: {
		flex: 2,
		flexDirection: 'row'
	},
	charNameField: {
		flex: 1,
		fontSize: 24
	},
	statPickers: {
		flex: 2,
		flexDirection: 'row'
	},
	racePickers: {
		flex: 2,
		flexDirection: 'row'
	},
	backgroundPicker: {
		flex: 2,
		flexDirection: 'row'
	},
	pickerLabel: {
		flex: 1,
		marginHorizontal: 5
	},
	picker: {
		flex: 3,
		marginBottom: 5,
		marginHorizontal: 5,
		color: '#000000',
		backgroundColor: '#b6b7ac'
	},
	buttonContainer: {
		flex: 2,
		flexDirection: 'row'
	},
	createButton: {
		flex: 1,
		marginBottom: 5,
		marginHorizontal: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0bb41c'
	},
	cancelButton: {
		flex: 1,
		marginBottom: 5,
		marginHorizontal: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#b40004'
	},
	buttonText: {
		fontSize: 52
	}
});
