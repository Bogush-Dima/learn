import React, { useState, useRef } from 'react'

export const TestComponentMemo = ({ count }) => {
  const ref = useRef(null)
  // const [count, setCount] = useState(0)

  // const changeCount = () => {
  //   setCount(1)
  // }
  ref.count = 2
  console.log(ref);

  return (
    <>
      <p ref={ref}>{count}</p>
      {/* <button onClick={changeCount}>Click</button> */}
    </>
  )
}

// export const TestComponentMemo = React.memo(TestComponent)