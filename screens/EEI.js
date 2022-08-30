import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, Platform, Image, ImageBackground, StatusBar, Dimensions } from 'react-native';
import axios from "axios";
import MapView, { Marker } from "react-native-maps";

export default class EEIScreen extends React.Component {

  constructor() {
    
    super();

    this.state = {

      location:{},
    }
  }

  componentDidMount() {

    this.getEEILocation();
  }

  getEEILocation = async () => {

    axios.get("https://api.wheretheiss.at/v1/satellites/25544")
      .then (response => {

        this.setState({location:response.data});
        console.log(response.data);
      })

      .catch (error=> {

        alert(error.message);
      })
  }

  render() {

    if(Object.keys(this.state.location).length == 0) {

      return(

        <Text style = {styles.text}>Carregando...</Text>
      )
    } else {
      
      return(

        <View>

          <ImageBackground
          style = {styles.container}
          source = {require("../assets/iss_bg.jpg")}>

            <SafeAreaView style = {styles.safeAreaView}/>
          
            <Text style = {styles.text}>Tela de localização da EEI</Text>

            

            <View style = {styles.view}>

              <MapView
                style = {styles.mapView}
                region = {{

                  latitude: this.state.location.latitude,
                  longitude: this.state.location.longitude,
                  latitudeDelta: 70,
                  longitudeDelta: 70,
                }}>
                
                  <Marker
                    coordinate = {{

                      latitude: this.state.location.latitude,
                      longitude: this.state.location.longitude,
                    }}>
                  
                      <Image
                      style = {styles.image}
                      source = {require("../assets/iss_icon.png")}/>

                  </Marker>
              </MapView>

              <Text style = {styles.coordinates}>Latitude: {this.state.location.latitude}</Text>
              <Text style = {styles.coordinates}>Longitude: {this.state.location.longitude}</Text>
              <Text style = {styles.coordinates}>Altitude: {this.state.location.altitude}</Text>
              <Text style = {styles.coordinates}>Velocidade: {this.state.location.velocity}</Text>
            </View>
          </ImageBackground>

        </View>
      );
    }
  }
}

const styles = StyleSheet.create({

  container: {

    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  text: {

    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 50,
    color: "white"
  },

  safeAreaView: {

    marginTop: Platform.OS === "android" ? 
    StatusBar.currentHeight :
    0
  },

  mapView: {
  
  width: Dimensions.get("window").width,
  height: "80%",
  },

  image: {

    width: 60,
    height: 60,
  },

  view: {

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  coordinates: {

    fontSize: 14,
    color: "black",
  },
})