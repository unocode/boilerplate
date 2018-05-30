import { Core } from 'unocode';

import Main from './actions/main/main.action';

const nextActions = [
  Main
];

Core.start([{
  enabled: () => true,
  nextActions
}]);

// UnoCode.runActions(nextActions);
