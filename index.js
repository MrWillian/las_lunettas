import { AppRegistry } from 'react-native';
import App from './src/App.js';
import { readFile } from 'fs/promises';

const json = JSON.parse(await readFile(new URL('./app.json', import.meta.url)));
// import {name as appName} from './app.json';

AppRegistry.registerComponent(json, () => App);
