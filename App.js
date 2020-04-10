import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class App extends React.Component{
  constructor (props){
    super (props);
    this.state = {
      contador: 0
    }
  }
  render (){
    return (
  <View style={styles.container}>
   <Text>{this.state.contador}</Text>
    <Button
      title="Mudar texto"
      onPress={() => {
      this.setState({
    contador: this.state.contador + 1
       });
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#ffcbdb',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
);
