import { Guard } from 'unocode';

export default new Guard({
  conditions: [{code: ({elem}) => elem('#myDiv').isNull}]
});
