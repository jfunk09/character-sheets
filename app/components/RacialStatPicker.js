import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight, Button, AsyncStorage, Picker } from 'react-native';
const Item = Picker.Item;
const _ = require('underscore');

export default class RacialStatPicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedMod1: this.props.options[0].key,
			selectedMod2: this.props.options[1].key
		};
	}

	render() {
		const that = this;

		const pickerOptions = _.map(this.props.options, (option) => {
			return <Item key={option.key} label={option.label} value={option.key} />
		});

		return (
			<View style={styles.pickers}>
				<View style={{flex: 1}}>
					<Text style={styles.pickerLabel}>Stat 1: {that.state.selectedMod1}</Text>
					<Picker
						style={styles.picker}
						selectedValue={this.state.selectedMod1}
						onValueChange={(option) => {
							that.setState({selectedMod1: option});
						}}>
						{pickerOptions}
					</Picker>
				</View>
				<View style={{flex: 1}}>
					<Text style={styles.pickerLabel}>Stat 2: {that.state.selectedMod2}</Text>
					<Picker
						style={styles.picker}
						selectedValue={this.state.selectedMod2}
						onValueChange={(option) => {
							that.setState({selectedMod2: option});
						}}>
						{pickerOptions}
					</Picker>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	pickers: {
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
		backgroundColor: '#f0f0f0'
	},
});