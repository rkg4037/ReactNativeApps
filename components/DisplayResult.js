import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function DisplayResult(prop){
    if(!prop.flag)
        return (
            <View></View>
        )
    else{
    console.log("Entered DisplayResult")
    console.log(prop.stateName)
    console.log(prop.city)
    console.log(typeof prop.data)
    console.log(Object.keys(prop.data))
    console.log(typeof prop.data["total_values"])
    console.log(typeof prop.data["state_wise"])
    console.log(Object.keys(prop.data["state_wise"]))
    console.log(Object.keys(prop.data["state_wise"][prop.stateName]))
    console.log((prop.data["state_wise"][prop.stateName]["active"]))
    console.log(Object.keys(prop.data["state_wise"][prop.stateName]["district"]))
    console.log(Object.keys(prop.data["state_wise"][prop.stateName]["district"][prop.city]))
    
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 25, textAlign: 'center'}}>{prop.city},{prop.stateName}</Text>
            <Text style={{fontSize: 25, textAlign: 'center'}}>Active Cases: {prop.data.state_wise[prop.stateName].district[prop.city].active}</Text>
            <Text style={{fontSize: 25, textAlign: 'center'}}>Confirmed Cases: {prop.data.state_wise[prop.stateName].district[prop.city].confirmed}</Text>
    <Text style={{fontSize: 25, textAlign: 'center'}}>Deceased: {prop.data.state_wise[prop.stateName].district[prop.city].deceased}</Text>  
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