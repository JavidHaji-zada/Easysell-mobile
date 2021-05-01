import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from '@shared/routers/app-navigator';
import { APP_COLORS } from '@shared/styles';
function App() {
  return (
    <>
      <StatusBar backgroundColor={APP_COLORS.lightTurquoise} />
      <AppNavigator />
    </>
  )
}

export default App;