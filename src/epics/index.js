import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable';


const pingEpic = action$ =>
  action$.ofType('ADD_TODO')
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'testEpic' })

const epics = [pingEpic];

export default combineEpics(...epics);
