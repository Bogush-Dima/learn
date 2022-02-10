import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLICK } from "./redux/actionTypes";

export const App = () => {
  const store = useSelector(store => store)
  const dispatch = useDispatch()
  
  console.log(store);

  return (
    <>
      <button onClick={() => dispatch({type: CLICK})}>
        Click
      </button>
    </>
  );
}