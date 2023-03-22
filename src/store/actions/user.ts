import { createActionCreators } from 'immer-reducer';

import { AsyncAction } from './common';
import { User } from '../reducers/user';
import { RequestState } from '../reducers/common';

export const userActions = createActionCreators(User);

export type UserActions = ReturnType<| typeof userActions.setState
  | typeof userActions.setSuppliers
  >;

export const getSuppliers = (): AsyncAction => async (dispatch, _, { mainApi }) => {
  try {
    dispatch(userActions.setState(RequestState.LOADING));
    const res = await mainApi.getSuppliers();
    dispatch(userActions.setSuppliers(res.data.suppliers));
    dispatch(userActions.setState(RequestState.LOADED));
  } catch (e: any) {
    dispatch(userActions.setState(RequestState.ERROR));
  }
};

