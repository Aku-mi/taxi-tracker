import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { store, persistor } from './redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Pages } from './pages';
import { Load } from './components/Loader';

export default () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={<Load />} persistor={persistor}>
        <Pages />
      </PersistGate>
    </Provider>
  );
};
