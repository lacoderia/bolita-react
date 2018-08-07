import navigation from './components/navigation/navigationReducer';
import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux-immutable';

const reducers = combineReducers({
  navigation,
  form: reduxFormReducer,
});

export default reducers;
