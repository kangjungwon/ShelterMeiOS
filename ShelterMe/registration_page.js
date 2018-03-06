import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  email: t.String,
  password: t.String,
  phone: t.String
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
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:50, alignSelf:"center"}}> Registration
        </Text>
        <Form
          ref={c => this._form = c} // assign a ref
          type={User}
        />
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
        <Button
          title="Cancel"
          onPress={this.handleCancel}
        />
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
});