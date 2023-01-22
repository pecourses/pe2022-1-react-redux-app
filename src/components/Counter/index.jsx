import React from 'react';

import { connect } from 'react-redux';
import { decrement, increment } from '../..';

function Counter (props) {
  const { count, dispatch } = props;

  const decrementCount = () => {
    dispatch(decrement());
  };

  const incrementCount = () => {
    dispatch(increment());
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

function mapStateToProps (state) {
  return state;
}

const HOC = connect(mapStateToProps);
export default HOC(Counter);
