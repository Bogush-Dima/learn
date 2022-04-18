import React, { useState } from 'react'

export const TestComponentMemo = ({ count }) => {
  // const [count, setCount] = useState(0)

  // const changeCount = () => {
  //   setCount(1)
  // }
  console.log(count);

  return (
    <>
      <p>{count}</p>
      {/* <button onClick={changeCount}>Click</button> */}
    </>
  )
}

// export const TestComponentMemo = React.memo(TestComponent)