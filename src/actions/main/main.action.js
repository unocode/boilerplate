import { Action, Command } from 'unocode';

import guard from './main.guard';
import html from './main.html';
// import myScript from './myscript.script.js';
// import mySCSS from './myscss.style.scss';
// import myHTML from './myhtml.html';

const commands = [
  Command.JSImporter(() => console.log('rodou')),
  Command.HTMLImporter('//body', html, true),
  Command.JSImporter(() => console.log('my guard'))
];

export default new Action({
  guard,
  commands
});
