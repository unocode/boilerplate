import { Core } from 'unocode';

import UnocodeGreetings from './actions/unocode-greetings/unocode-greetings.action';

const nextActions = [
  UnocodeGreetings
];

Core.start([{
  enabled: () => true,
  nextActions
}]);
