import { combineReducers } from 'redux';
import successReducer from './successReducer';

const rootReducer = combineReducers({
    success: successReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;