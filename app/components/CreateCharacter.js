import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight, Button, TextInput } from 'react-native';

export default class CreateCharacter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			inUse: false
		}
	}

	render () {
		return (
			<View style={styles.addSheet}>
				<TextInput
					placeholder="Enter character name here"
					onChangeText={(text) => {this.setState({name: text, inUse: false})}}
					style={this.state.inUse ? styles.inUse : styles.charNameField}
				/>

				<Button
					onPress={() => {
						const inUse = this.props.create(this.state.name);
						if (inUse) {
							this.setState({inUse: true});
						}
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
	charNameField: {
		width: 200
	},
	inUse: {
		width: 200,
		color: '#bf090d'
	}
});
