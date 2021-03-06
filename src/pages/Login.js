import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';

import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';

export default class Login extends Component {
  render() {
    return (
        <ScrollView style={styles.scroll}>

        <Container>
            <Label text="Email" />
            <TextInput
                style={styles.textInput}
            />
        </Container>

        <Container>
            <Label text="Password" />
            <TextInput
                secureTextEntry={true}
                style={styles.textInput}
            />
        </Container>



        <View style={styles.footer}>
            <Container>
                <Button
                    label="Sign In"
                    styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                    onPress={this.press}
                />
            </Container>

            <Container>
                <Button
                    label="Register"
                    styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                    onPress={this.press}
                />
            </Container>

            <Container>
                <Button
                    label="CANCEL"
                    styles={{label: styles.buttonBlackText}}
                    onPress={this.press}
                />
            </Container>
        </View>

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#E1D7D8',
        padding: 30,
        flexDirection: 'column'
    },


    label: {
        color: '#0d8898',
        fontSize: 20
    },
    alignRight: {
        alignSelf: 'flex-end'
    },

    textInput: {
        height: 80,
        fontSize: 30,
        backgroundColor: '#FFF'
    },

    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },

    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },

    buttonBlackText: {
        fontSize: 20,
        color: '#595856'
    },
    primaryButton: {
        backgroundColor: '#34A853'
    },
    footer: {
       marginTop: 100
    }


});


// press() {
//   //execute any code here
// }



