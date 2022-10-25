import React, { memo, useState } from 'react';

import { Button } from 'antd';
import {
  DivWrapper,
  ImgWrapper
} from './style';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync2,
  incrementIfOdd,
  selectCount,
} from '@/store/counter';
import logo from '@/assets/img/logo.svg';

export default memo(function Recommemd() {
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <DivWrapper>
      <div className="counter">
        <ImgWrapper bgImage={logo} className="App-logo" alt="logo" />
        <div>
          <Button onClick={() => dispatch(decrement())}>-</Button>
          <span className='count-num'>{count}</span>
          <Button onClick={() => dispatch(increment())}>+</Button>
        </div>
        <div className='counter-p'>
          <input
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button
            onClick={() => dispatch(incrementByAmount(incrementValue))}
          >
            Add Amount
          </button>
          <button
            onClick={() => dispatch(incrementAsync2(incrementValue))}
          >
            Add Async
          </button>
          <button
            onClick={() => dispatch(incrementIfOdd(incrementValue))}
          >
            Add If Odd
          </button>
        </div>
      </div>
    </DivWrapper>
  )
})
