import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export interface ILoginViewProps {

}

export default class LoginView extends React.Component<ILoginViewProps>{
    constructor(props: ILoginViewProps) {
        super(props);        
    }

    render() {
        return(
          <View>
                <Text>Login</Text>
                <View >
                    <View style={styles.button}>
                        <Button
                        title="-"
                        onPress={this.sendAlert}
                        accessibilityLabel="decrement"
                        color="red"
                        />
                    </View>
                </View>
          </View>  
        );
    }

    private sendAlert() {
        alert('Muy')
    }
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      alignSelf: 'center',
    },
    buttons: {
      flexDirection: 'row',
      minHeight: 70,
      alignItems: 'stretch',
      alignSelf: 'center',
      borderWidth: 5,
    },
    button: {
      flex: 1,
      paddingVertical: 0,
    },
    greeting: {
      color: '#999',
      fontWeight: 'bold',
    },
  });