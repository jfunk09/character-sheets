import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight, Button, TextInput, Picker } from 'react-native';
const Item = Picker.Item;

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
			charisma: '3'
		}
	}

	render () {
		function onStatChange(statKey, statValue) {
			const update = {};
			update[statKey] = statValue;
			this.setState(update);
		}

		return (
			<View style={styles.addSheet}>
				<View style={styles.nameField}>
					<TextInput
						placeholder="Enter character name here"
						onChangeText={(text) => {this.setState({name: text, inUse: false})}}
						style={styles.charNameField}
					/>
				</View>

				<View style={styles.statPickers}>
					<Picker
						style={styles.statPicker}
						selectedValue={this.state.strength}
						onValueChange={onStatChange.bind(this, 'strength')}>
						<Item label="3" value="3" />
						<Item label="4" value="4" />
						<Item label="5" value="5" />
						<Item label="6" value="6" />
						<Item label="7" value="7" />
						<Item label="8" value="8" />
						<Item label="9" value="9" />
						<Item label="10" value="10" />
						<Item label="11" value="11" />
						<Item label="12" value="12" />
						<Item label="13" value="13" />
						<Item label="14" value="14" />
						<Item label="15" value="15" />
						<Item label="16" value="16" />
						<Item label="17" value="17" />
						<Item label="18" value="18" />
					</Picker>
					<Picker
						style={styles.statPicker}
						selectedValue={this.state.dexterity}
						onValueChange={onStatChange.bind(this, 'dexterity')}>
						<Item label="3" value="3" />
						<Item label="4" value="4" />
						<Item label="5" value="5" />
						<Item label="6" value="6" />
						<Item label="7" value="7" />
						<Item label="8" value="8" />
						<Item label="9" value="9" />
						<Item label="10" value="10" />
						<Item label="11" value="11" />
						<Item label="12" value="12" />
						<Item label="13" value="13" />
						<Item label="14" value="14" />
						<Item label="15" value="15" />
						<Item label="16" value="16" />
						<Item label="17" value="17" />
						<Item label="18" value="18" />
					</Picker>
					<Picker
						style={styles.statPicker}
						selectedValue={this.state.constitution}
						onValueChange={onStatChange.bind(this, 'constitution')}>
						<Item label="3" value="3" />
						<Item label="4" value="4" />
						<Item label="5" value="5" />
						<Item label="6" value="6" />
						<Item label="7" value="7" />
						<Item label="8" value="8" />
						<Item label="9" value="9" />
						<Item label="10" value="10" />
						<Item label="11" value="11" />
						<Item label="12" value="12" />
						<Item label="13" value="13" />
						<Item label="14" value="14" />
						<Item label="15" value="15" />
						<Item label="16" value="16" />
						<Item label="17" value="17" />
						<Item label="18" value="18" />
					</Picker>
					<Picker
						style={styles.statPicker}
						selectedValue={this.state.intelligence}
						onValueChange={onStatChange.bind(this, 'intelligence')}>
						<Item label="3" value="3" />
						<Item label="4" value="4" />
						<Item label="5" value="5" />
						<Item label="6" value="6" />
						<Item label="7" value="7" />
						<Item label="8" value="8" />
						<Item label="9" value="9" />
						<Item label="10" value="10" />
						<Item label="11" value="11" />
						<Item label="12" value="12" />
						<Item label="13" value="13" />
						<Item label="14" value="14" />
						<Item label="15" value="15" />
						<Item label="16" value="16" />
						<Item label="17" value="17" />
						<Item label="18" value="18" />
					</Picker>
					<Picker
						style={styles.statPicker}
						selectedValue={this.state.wisdom}
						onValueChange={onStatChange.bind(this, 'wisdom')}>
						<Item label="3" value="3" />
						<Item label="4" value="4" />
						<Item label="5" value="5" />
						<Item label="6" value="6" />
						<Item label="7" value="7" />
						<Item label="8" value="8" />
						<Item label="9" value="9" />
						<Item label="10" value="10" />
						<Item label="11" value="11" />
						<Item label="12" value="12" />
						<Item label="13" value="13" />
						<Item label="14" value="14" />
						<Item label="15" value="15" />
						<Item label="16" value="16" />
						<Item label="17" value="17" />
						<Item label="18" value="18" />
					</Picker>
					<Picker
						style={styles.statPicker}
						selectedValue={this.state.charisma}
						onValueChange={onStatChange.bind(this, 'charisma')}>
						<Item label="3" value="3" />
						<Item label="4" value="4" />
						<Item label="5" value="5" />
						<Item label="6" value="6" />
						<Item label="7" value="7" />
						<Item label="8" value="8" />
						<Item label="9" value="9" />
						<Item label="10" value="10" />
						<Item label="11" value="11" />
						<Item label="12" value="12" />
						<Item label="13" value="13" />
						<Item label="14" value="14" />
						<Item label="15" value="15" />
						<Item label="16" value="16" />
						<Item label="17" value="17" />
						<Item label="18" value="18" />
					</Picker>
				</View>

				<View style={styles.buttons}>
					<Button
						onPress={() => {
							this.props.create(this.state.name);
						}}
						title="Create"
						color="#BF8E04"
					/>
					<Button
						onPress={this.props.cancel}
						title="Cancel"
						color="#BF8E04"
					/>
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
		backgroundColor: '#bf342a',
	},
	nameField: {
		flex: 1,
		flexDirection: 'row'
	},
	charNameField: {
		flex: 1
	},
	statPickers: {
		flex: 2,
		flexDirection: 'row'
	},
	statPicker: {
		flex: 1,
		color: '#000000'
	},
	buttons: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});
