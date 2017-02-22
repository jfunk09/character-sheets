import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Navigator,
	TouchableHighlight
} from 'react-native';
import comps from './app/components';

/*
 * === Components ===
 */
class CharacterSheets extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'thingOne': 10,
			'thingTwo': "hellow"
		};
	}

	render() {
		const that = this;

		const routes = {
			main: { title: 'Main Scene', index: 0, scene: comps.TestScene },
			second: { title: 'Second Scene', index: 1, scene: comps.TestScene2 }
		};

		function simpleStateUpdateFn(key) {
			return function (val) {
				const update = {};
				update[key] = val;
				that.setState(update);
			}
		}

		return (
			<Navigator
				initialRoute={{ title: routes.main.title, index: 0 }}
				renderScene={function (route, navigator) {
					switch(route.index) {
						case 0:
							return <routes.main.scene
								toTwo={() => {
									navigator.push(routes.second);
								}}

								thingOne={that.state.thingOne}
								thingTwo={that.state.thingTwo}

								updateThingTwo={simpleStateUpdateFn('thingTwo')}
							/>;
							break;
						case 1:
							return <routes.second.scene
								goBack={() => {
									navigator.pop();
								}}

								toHome={() => {
									navigator.popToTop();
								}}

								thingOne={that.state.thingOne}

								updateThingOne={simpleStateUpdateFn('thingOne')}
							/>;
							break;
						default:
							return <routes.main.scene
								toTwo={() => {
									navigator.push(routes.second);
								}}

								thingOne={that.state.thingOne}
								thingTwo={that.state.thingTwo}

								updateThingTwo={simpleStateUpdateFn('thingTwo')}
							/>;
					}
				}}
			/>
		);
	}
}

/*
 * === STYLES ===
 */
const styles = StyleSheet.create({
	mainScene: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#4c7cbf',
	},
	secondScene: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#6bbf45',
	}
});

AppRegistry.registerComponent('CharacterSheets', () => CharacterSheets);