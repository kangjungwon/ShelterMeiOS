import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Button, AppRegistry, SectionList } from 'react-native';

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
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={styles.container}>
        <Text style={{fontSize:50, textAlign: 'center'}}> Profile
        </Text>
        <Image source={pic} style={styles.image}/>
        <SectionList styles={{marginTop:50}}
          sections={[
            {title: 'Name', data: ['Devin']},
            {title: 'Email', data: ['devinboy123@gatech.edu']},
            {title: 'Phone', data: ['123-456-7890']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        <Button
          title="Change info"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: '5%',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  image: {
    height: 200,
    borderRadius: 100,
    width: 200,
    alignSelf: 'center'
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});