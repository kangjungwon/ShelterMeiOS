import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions,Button } from 'react-native';
import MapView from 'react-native-maps'; // npm install react-native-maps --save

const {width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATTITUDE_DELTA = 0.0092
const LONGITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO

export default class App extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  constructor(props) {
    super(props)

    this.state = {
      initialPosition: {
        latitude:0,
        longitude:0,
        latitudeDelta:0,
        longitudeDelta:0,
      },
      markerPosition: {
        latitude:0,
        longitude:0
      }
    }
  }

  watchID: ?number = null

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)
      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATTITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }

      this.setState({initialPosition: initialRegion})
      this.setState({markerPosition: initialRegion})

    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var lastRegion = {
        latitude: lat,
        longitude: long,
        longitudeDelta: LONGITUDE_DELTA,
        latitudeDelta: LATTITUDE_DELTA
      }

      this.setState({initialPosition: lastRegion})
      this.setState({markerPosition: lastRegion})
    })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.state.initialPosition}>
            <MapView.Marker
              coordinate={this.state.markerPosition}>
              <View style={styles.radius}>
                <View style={styles.marker}/>
              </View>
            </MapView.Marker>
        </MapView>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Buyer"
          />
          <Button
            onPress={this._onPressButton}
            title="Seller"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50/2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 112, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height:20,
    width:20,
    borderWidth:3,
    borderColor:'white',
    borderRadius:20/2,
    overflow:'hidden',
    backgroundColor:'#007AFF'
  },
  container: {
    flex:1,
    //justifyContent: 'center',
    //alignItems:'center',
    backgroundColor: '#F5FCFF'
  },
  map: {
    position: 'absolute',
    top:0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  welcome: {
    fontSize:20,
    textAlign: 'center',
    margin:10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  alternativeLayoutButtonContainer: {
    top:600,
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'row',
  },
});
