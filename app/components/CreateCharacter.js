import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight, Button, TextInput, Picker } from 'react-native';

const Item = Picker.Item;
const _ = require('underscore');

export default class CreateCharacter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			strength: '3',
			dexterity: '3',
			constitution: '3',
			intelligence: '3',
			wisdom: '3',
			charisma: '3',
			raceKey: 'human',
			subRaceKey: 'regular',
			backgroundKey: 'acolyte'
		}
	}

	render () {
		const that = this;
		function onStatChange(statKey, statValue) {
			const update = {};
			update[statKey] = statValue;
			this.setState(update);
		}
		function onRaceChange(raceKey) {
			that.setState({raceKey: raceKey});
		}
		function onSubRaceChange(subRaceKey) {
			that.setState({subRaceKey: subRaceKey});
		}
		function onBGChange(backgroundKey) {
			that.setState({backgroundKey: backgroundKey});
		}

		const statOptions = _.map(["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"], (num) => {
			return <Item key={num} label={num} value={num} />
		});

		return (
			<View style={styles.addSheet}>
				<View style={styles.nameField}>
					<TextInput
						placeholder="Enter character name here"
						onChangeText={(text) => {this.setState({name: text})}}
						style={styles.charNameField}
					/>
				</View>

				<View style={styles.statPickers}>
					<View style={{flex: 1}}>
						<Text style={styles.pickerLabel}>STRENGTH</Text>
						<Picker
							style={styles.picker}
							mode="dropdown"
							selectedValue={this.state.strength}
							onValueChange={onStatChange.bind(this, 'strength')}>
							{statOptions}
						</Picker>
					</View>
					<View style={{flex: 1}}>
						<Text style={styles.pickerLabel}>DEXTERITY</Text>
						<Picker
							style={styles.picker}
							mode="dropdown"
							selectedValue={this.state.dexterity}
							onValueChange={onStatChange.bind(this, 'dexterity')}>
							{statOptions}
						</Picker>
					</View>
					<View style={{flex: 1}}>
						<Text style={styles.pickerLabel}>CONSTITUTION</Text>
						<Picker
							style={styles.picker}
							mode="dropdown"
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
							mode="dropdown"
							selectedValue={this.state.intelligence}
							onValueChange={onStatChange.bind(this, 'intelligence')}>
							{statOptions}
						</Picker>
					</View>
					<View style={{flex: 1}}>
						<Text style={styles.pickerLabel}>WISDOM</Text>
						<Picker
							style={styles.picker}
							mode="dropdown"
							selectedValue={this.state.wisdom}
							onValueChange={onStatChange.bind(this, 'wisdom')}>
							{statOptions}
						</Picker>
					</View>
					<View style={{flex: 1}}>
						<Text style={styles.pickerLabel}>CHARISMA</Text>
						<Picker
							style={styles.picker}
							mode="dropdown"
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
							<Item label="Human" value="human" />
							<Item label="Goliath" value="goliath" />
						</Picker>
					</View>
					<View style={{flex: 1}}>
						<Text style={styles.pickerLabel}>SUBRACE</Text>
						<Picker
							style={styles.picker}
							selectedValue={this.state.subRaceKey}
							onValueChange={onSubRaceChange}>
							<Item label="Regular" value="regular" />
							<Item label="Variant" value="variant" />
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
							<Item label="Acolyte" value="acolyte" />
							<Item label="Sage" value="sage" />
						</Picker>
					</View>
				</View>

				<View style={styles.buttonContainer}>
					<TouchableHighlight
						style={styles.createButton}
						onPress={() => {
							const characterJson = {
								name: this.state.name,
								strength: this.state.strength,
								dexterity: this.state.dexterity,
								constitution: this.state.constitution,
								intelligence: this.state.intelligence,
								wisdom: this.state.wisdom,
								charisma: this.state.charisma
							};
							this.props.create(characterJson)
						}}>
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
