import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight, Button } from 'react-native';

export default class CharacterSheet extends Component {

	render () {
		return (
			<View style={styles.characterSheet}>
				<Text>Character: {this.props.name}</Text>

				<Button
					onPress={this.props.toCharacterSelect}
					title="Back to character selection"
					color="#BF8E04"
				/>

				<Button
					onPress={this.props.deleteCharacter.bind(null, this.props.name)}
					title="DELETE"
					color="#BF0074"
				/>
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
		backgroundColor: '#bf342a',
	}
});
