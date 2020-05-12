import * as React from 'react';
import { TextInput,Button,Appbar } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import DisplayResult from './components/DisplayResult'

const fetch = require("node-fetch");
var isUpdated=false
var flag = false
export default class App extends React.Component {

  state = {
    stateName: '',
    cityName: '',
    result: 'hello',
    canDisplay: false
  }
  fetchResult(){
    console.log("Inside fetchResult")
    fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
        "x-rapidapi-key": "166d51536fmsh2d1e0052d11c2b6p1c347djsncefb102aeda7"
      }
    })
    .then(response => {
      setTimeout(() => null, 0);  
      return response.json();
    })
    .then(data=>{
      //console.log(data)
      this.setState({result:data,canDisplay:true})
    })
    .catch(err => {
      console.log(err);
    });
  }
  render(){
    console.log("Inside render")
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Action icon='format-list-bulleted' onPress = {()=>{console.log("format-listed-bulleted")}}/>
          <Appbar.Content
            title='COVID-19 NEWS'
          />

        </Appbar.Header>
        <TextInput
          mode='flat'
          label='City'
          value={this.state.cityName}
          style={{marginTop: 5}}
          onChangeText={(text) => this.setState({ cityName:text })}
        />
        <TextInput
          mode='flat'
          label='State'
          value={this.state.stateName}
          style={{marginTop: 5}}
          onChangeText={(text) => this.setState({ stateName:text })}
        />
        <Button 
          icon="information" 
          mode="contained"
          style={{margin:15,marginTop:30}} 
          onPress={
            ()=>{
                this.fetchResult()
              }
            }
          >
          Get COVID-19 related details
        </Button>
        <DisplayResult data={this.state.result}  stateName={this.state.stateName} city={this.state.cityName} flag={this.state.canDisplay}/>
        
        <Button 
          icon="delete" 
          mode="contained"
          style={{margin:15,marginTop:30}} 
          onPress={
            ()=>{
                this.setState({cityName:'',stateName:'',canDisplay:false})
              }
            }
          >
          Clear
        </Button>
      </View>
    ) ;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
});
