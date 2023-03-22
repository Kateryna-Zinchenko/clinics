import { createReducerFunction, ImmerReducer } from 'immer-reducer';
import { RequestState } from './common';

interface UserState {
  state: RequestState,
  suppliers: any[] | null,
}

const initialState: UserState = {
  state: RequestState.IDLE,
  suppliers: null,
};

export class User extends ImmerReducer<UserState> {
  setSuppliers(suppliers: any[]) {
    this.draftState.suppliers = suppliers;
  }

  setState(state: RequestState) {
    this.draftState.state = state;
  }
}

export default createReducerFunction(User, initialState);
