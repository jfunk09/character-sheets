import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight, Button } from 'react-native';

export default class TestScene extends Component {
	static get defaultProps() {
		return {
			title: 'TestScene2'
		};
	}

	render () {
		return (
			<View style={styles.mainScene}>
				<Text>this is a scene i hope: {this.props.title}</Text>

				<Button
					onPress={this.props.toTwo}
					title="Two Screen Two"
					color="#6bbf45"
				/>

				<Text>{this.props.thingOne}</Text>
				<Text>{this.props.thingTwo}</Text>

				<Button
					onPress={this.props.updateThingTwo.bind(null, "new!")}
					title="Change thingTwo"
					color="#BF8E04"
				/>
			</View>
		)
	}
}

TestScene.propTypes = {
	title: PropTypes.string.isRequired,
	toTwo: PropTypes.func.isRequired,
	thingOne: PropTypes.number.isRequired,
	thingTwo: PropTypes.string.isRequired,
	updateThingTwo: PropTypes.func.isRequired
};

/*
 * === STYLES ===
 */
const styles = StyleSheet.create({
	mainScene: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#4c7cbf',
	}
});

//<TouchableHighlight onPress={this.props.updateThingTwo("new!")}>
//	<Text>Change thingTwo</Text>
//</TouchableHighlight>