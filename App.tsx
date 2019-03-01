import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Hello} from './src/components/Hello';
import AppStore from './src/stores/AppStore';
import LoginView from './src/views/LoginView';

export default class App extends React.Component<{}> {

  private _appStore: AppStore;
  constructor(props: {}) {
    super(props);
    this._appStore = new AppStore();
    
  }
  
  render() {
    return (
      <View style={styles.container}>
        {
          this._appStore.hasAuthenticate() 
          ? <Hello name="Guizera2"  enthusiasmLevel={1}/>
          : <LoginView />
        }       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
