'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from "react-redux";
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from "../../router";

// Actions
import { initialApp } from '../../actions/AppAction';

@connect(state => ({
    nav: state.nav
}))
class AppContainer extends Component {

	componentDidMount() {
		this.props.dispatch(initialApp());
	}

	render() {
		return (
			<AppNavigator
			navigation={addNavigationHelpers({
				dispatch: this.props.dispatch,
				state: this.props.nav
			})}
			/>
		);
	}
}

const styles = StyleSheet.create({

});


export default AppContainer;