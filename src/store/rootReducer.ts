import { combineReducers } from 'redux';

/** Reducers(s) */
import { nasaReducer } from './modules/nasa';

export const rootReducer = combineReducers({
  nasa: nasaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
