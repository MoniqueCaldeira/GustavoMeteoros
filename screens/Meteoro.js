import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, Platform, Image, ImageBackground, StatusBar, Dimensions, FlatList } from 'react-native';
import axios from "axios";

export default class MeteorScreen extends React.Component {

  constructor() {
    
    super();

    this.state = {

      meteors:{},
    }
  }

  componentDidMount() {

    this.getMeteors();
  }

  getMeteors = async () => {

    axios.get("https://api.nasa.gov/neo/rest/v1/feed?api_key=luJm7ZMZYRjKIh2GL0xs3sxVUmkSqpevZXHZv9Qi")
      .then(response => {

        this.setState({meteors: response.data.near_earth_objects})
        console.log(this.state.meteors)
      })
      .catch(error => {

        alert(error.message)
      })
  }

  keyExtractor = (item, index) => {

    index.toString()
  }

  renderItem = ({item}) => {

    var bgImg;
    var speed;
    var size;

    /*if(item.threatScore <= 30) {

      
    }*/
  }

  render() {

    if(Object.keys(this.state.meteors).length == 0) {

      <Text style = {styles.container}>Carregando...</Text>
    } else {

        var array = Object.keys(this.state.meteors).map(date => {

          return(this.state.meteors[date]);
        })

        var Meteoros = [].concat.apply([], array);

        Meteoros.forEach(function(item) {

          var diameter = (item.estimated_diameter.kilometers.estimated_diameter_min + item.estimated_diameter.kilometers.estimated_diameter_max) / 2

          var threatScore = (diameter / item.close_approach_data[0].miss_distance.kilometers) * 10000000000

          item.threatScore = threatScore

          console.log(threatScore)
        })

      Meteoros.sort(function (a, b) {

        return(b.threatScore - a.threatScore)
      })

      Meteoros = Meteoros.slice(0, 4)

        return(

            <View style = {styles.container}>
            
              <SafeAreaView style = {styles.safeAreaView}/>
              
              <Text style = {styles.text}>Tela do Meteoro</Text>

              <FlatList
                keyExtractor = {this.keyExtractor}
                data = {Meteoros}
                renderItem = {this.renderItem}
                horizontal = {true}/>
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
  },

  safeAreaView: {

    marginTop: Platform.OS === "android" ? 
    StatusBar.currentHeight :
    0
  },
})