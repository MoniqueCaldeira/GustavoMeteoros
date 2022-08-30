import * as React from "react";
import { Text, View, StyleSheet, Image, ImageBackground, SafeAreaView, TouchableOpacity, StatusBar, Platform, Dimensions   } from 'react-native';

export default class HomeScreen extends React.Component {

  constructor() {
    
    super();

    this.state = {

      a:"",
    }
  }

  render() {

    return(

      <View>
        <ImageBackground style = {styles.container} source = {require("../assets/bg_image.png")}>
          <SafeAreaView style = {styles.safeAreaView}/>
          
          <Text style = {styles.text}>Aplicativo de Meteoro</Text>

          <TouchableOpacity
          style = {styles.button}
          onPress = {() => {

            this.props.navigation.navigate("EEIScreen")
          }}>
          
            <Text style = {styles.buttonText1}>Localização da EEI</Text>
            <Text style = {styles.buttonText2}>Saiba mais</Text>
            <Text style = {styles.buttonText3}>1</Text>
            <Image 
            style = {styles.buttonImage}
            source = {require("../assets/iss_icon.png")}/>
          </TouchableOpacity>
          
          <TouchableOpacity
          style = {styles.button}
          onPress = {() => {

            this.props.navigation.navigate("Meteoro")
          }}>
          
            <Text style = {styles.buttonText1}>Meteoros</Text>
            <Text style = {styles.buttonText2}>Saiba mais</Text>
            <Text style = {styles.buttonText3}>2</Text>
            <Image 
            style = {styles.buttonImage}
            source = {require("../assets/meteoro.png")}/>
          </TouchableOpacity>
          
        </ImageBackground>
      </View>
    );
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

  button: {

    backgroundColor: "#E0ECF6",
    borderRadius: 10,
    width: 250,
    height: 150,
    alignItems: "center",
    marginBottom: 50,
  },

  buttonText1: {

    fontSize: 24,
    fontWeight: "bold",
  },

  buttonText2: {

    fontSize: 12,
    color: "blue"
  },

  buttonText3: {

    fontSize: 105,
    opacity: 0.3,
    color: "grey",
    position: "absolute",
    left: 200,
  },

  buttonImage: {

    position: "absolute",
    top: 40,
    width: 219,
    height: 160,
  },

})