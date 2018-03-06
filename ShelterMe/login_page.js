import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String,
});

export default class App extends Component {
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }
  handleCancel = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }
  handleRegister = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:50, alignSelf:"center"}}> ShelterMe
        </Text>
        <Form
          ref={c => this._form = c} // assign a ref
          type={User}
        />
        <View style={styles.buttons}>
          <Button
            title="Login"
            onPress={this.handleSubmit}
          />
          <Button
            title="Register"
            onPress={this.handleRegister}
          />
          <Button
            title="Cancel"
            onPress={this.handleCancel}
          />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: '10%',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttons: {
    //paddingTop: '50%',
  }
});