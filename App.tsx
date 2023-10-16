import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Home} from './src/pages/Home';
import SplashScreen from 'react-native-splash-screen';
import * as Sentry from '@sentry/react-native';
import codePush from 'react-native-code-push';

Sentry.init({
  dsn: 'https://cc0dad745e2e400593cac5a7823db394@o1425004.ingest.sentry.io/4505043729055744',
});

function App(): JSX.Element {
  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    });
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#121015'} />
      <Home />
    </>
  );
}

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(App);
