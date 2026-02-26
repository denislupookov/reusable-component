import { registerRootComponent } from 'expo';
// Required for CSS to work on Expo Web.
import './strict.css';
// Required for Fast Refresh to work on Expo Web
import '@expo/metro-runtime';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
