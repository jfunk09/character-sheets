import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight, Button, ListView, Image } from 'react-native';

export default class CharacterSheet extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(this.props.characters.concat('$$ADD$$'))
		};
	}

	render () {
		return (
			<View style={styles.characterSelect}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(data) => {
						if (data === '$$ADD$$') {
							return (
								<TouchableHighlight
									style={styles.addButton}
									onPress={this.props.addCharacter}
									underlayColor="#BFAA4F">
									<Text style={styles.addButtonText}>+</Text>
								</TouchableHighlight>
							)
						} else {
							return (
								<TouchableHighlight style={styles.button} onPress={this.props.selectCharacter.bind(null, data)}>
									<Image style={styles.buttonImage} source={require('../images/charImg.png')}>
										<Text>{data}</Text>
									</Image>
								</TouchableHighlight>
							)
						}
					}}
				/>
			</View>
		)
	}
}

CharacterSheet.propTypes = {
	characters: PropTypes.array.isRequired,
	selectCharacter: PropTypes.func.isRequired,
	addCharacter: PropTypes.func.isRequired
};

/*
 * === STYLES ===
 */
const styles = StyleSheet.create({
	characterSelect: {
		flex: 1,
		backgroundColor: '#bf9b34'
	},
	button: {
		height: 60,
		marginTop: 5,
		marginHorizontal: 5,
		flexDirection: 'row'
	},
	buttonImage: {
		height: 60,
		flex: 1,
		resizeMode: Image.resizeMode.cover
	},
	addButton: {
		height: 60,
		margin: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	addButtonText: {
		fontSize: 48
	}
});
