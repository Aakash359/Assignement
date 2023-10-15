import * as React from 'react';
import {StackActions} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const replace = (name, params) => {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
};

const dispatch = action => {
  navigationRef.current?.dispatch(action);
};

const push = (name, params) => {
  navigationRef.current?.dispatch(StackActions.push(name, params));
};

const goBack = () => {
  navigationRef.current?.goBack();
};

const navigateReset = key => {
  try {
    navigationRef.current.dispatch(
      CommonActions.reset({
        routes: [{name: key}],
      }),
    );
  } catch (error) {}
};

export default {
  navigate,
  goBack,
  push,
  dispatch,
  replace,
  navigateReset,
};
