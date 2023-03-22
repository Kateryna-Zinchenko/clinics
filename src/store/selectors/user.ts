import { createSelector, Selector } from 'reselect';
import { State } from '../index';
import { ISupplier, RequestState } from '../reducers/common';


const selectUserReducer = (state: State) => state.userReducer;

export const selectSuppliers: Selector<State, ISupplier[] | null> = createSelector(
  selectUserReducer,
  ({ suppliers }) => suppliers,
);

export const selectState: Selector<State, RequestState> = createSelector(
  selectUserReducer,
  ({ state }) => state,
);
