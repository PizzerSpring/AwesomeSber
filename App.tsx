

import React from 'react';
import {
  View,
} from 'react-native';
import Header from "./android/Header";
import Cards from "./android/Cards";


function App() {
  return (
      <View style={{backgroundColor: '#141414', height: "100%"}}>
          <Header/>
          <Cards/>
      </View>
  )
}

export default App;
