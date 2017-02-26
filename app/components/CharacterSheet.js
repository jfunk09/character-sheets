import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight, Button } from 'react-native';

export default class CharacterSheet extends Component {

	render () {
		return (
			<View style={styles.characterSheet}>
				<View style={styles.headerRow}>
					<TouchableHighlight
						style={styles.backButton}
						onPress={this.props.toCharacterSelect}>
						<Text style={styles.backButtonText}>&lt;</Text>
					</TouchableHighlight>
					<Text style={styles.characterName}>{this.props.name}</Text>
					<TouchableHighlight
						style={styles.deleteButton}
						onPress={this.props.deleteCharacter.bind(null, this.props.name)}>
						<Text style={styles.deleteButtonText}>&times;</Text>
					</TouchableHighlight>
				</View>
				<View style={styles.statsDisplay}>

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
		backgroundColor: '#bfa859',
	},
	headerRow: {
		flex:1,
		flexDirection: 'row'
	},
	statsDisplay: {
		flex: 11
	},
	backButton: {
		flex: 1,
		backgroundColor: '#ab9456'
	},
	backButtonText: {
		fontSize: 32,
		textAlign: 'center',
	},
	deleteButton: {
		flex: 1,
		backgroundColor: '#9d0610'
	},
	deleteButtonText: {
		fontSize: 32,
		textAlign: 'center'
	},
	characterName: {
		flex: 6,
		fontSize: 28,
		textAlign: 'center'
	}
});
