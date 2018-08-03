import { Action, Command } from 'unocode';

import guard from './unocode-greetings.guard';
import html from './unocode-greetings.html';
import style from './unocode-greetings.style.scss';
import js from './unocode-greetings.script';

const commands = [
  Command.CSSImporter(style),
  Command.HTMLImporter('/html/body', html, true),
  Command.JSImporter(js)
];

export default new Action({
  guard,
  commands
});