/**
 * Code Author : Avinash
 * Date : 10/01/19
 */
import {
  ADD_TO_COUNTER,
  SUBTRACT_FROM_COUNTER,
} from '../actions/counterActions';

const initialState = {
  counter: 0,
};
const counterAppReducer = (state = initialState, action) => {
  const currentState = state.counter;
  switch (action.type) {
    case ADD_TO_COUNTER:
      return {
        ...state,
        counter: currentState + 1,
      };
    case SUBTRACT_FROM_COUNTER:
      return {
        ...state,
        counter: currentState - 1,
      };
    default:
      return state
  }
};
export default counterAppReducer;
