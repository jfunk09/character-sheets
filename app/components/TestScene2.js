import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight, Button } from 'react-native';

export default class TestScene2 extends Component {
	static get defaultProps() {
		return {
			title: 'TestScene2'
		};
	}

	render () {
		return (
			<View style={styles.secondScene}>
				<Text>this is a scene i hope: {this.props.title}</Text>

				<Button
					onPress={this.props.toHome}
					title="Home"
					color="#4c7cbf"
				/>

				<Button
					onPress={this.props.goBack}
					title="Back"
					color="#808080"
				/>

				<Text>{this.props.thingOne}</Text>

				<Button
					onPress={this.props.updateThingOne.bind(null, this.props.thingOne + 1)}
					title="Change thingOne"
					color="#BF8E04"
				/>
			</View>
		)
	}
};

TestScene2.propTypes = {
	title: PropTypes.string.isRequired,
	goBack: PropTypes.func.isRequired,
	toHome: PropTypes.func.isRequired,
	thingOne: PropTypes.number.isRequired,
	updateThingOne: PropTypes.func.isRequired
};

/*
 * === STYLES ===
 */
const styles = StyleSheet.create({
	secondScene: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#6bbf45',
	}
});