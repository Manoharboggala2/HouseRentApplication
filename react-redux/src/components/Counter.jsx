import React from 'react'
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import { Increment,Decrement } from '../redux/CounterAction';
function Counter() 
{
  const dispatch=useDispatch();

  const counter=useSelector(state=>state.counter)

  return (
    <div className='container mt-5'>
        <h2 className='text-center'>Counter Application</h2>
        <div className='container text-center mt-5'>
            <button className='btn btn-primary 'onClick={()=>dispatch(Increment())}>Increment</button>
            <b className='fs-5 mx-5'>{counter}</b>
            <button className='btn btn-primary' onClick={()=>dispatch(Decrement())}>Decrement</button>
        </div>
      
    </div>
  )
}

export default Counter
