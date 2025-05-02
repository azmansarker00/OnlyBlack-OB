
import React from 'react'
import MyContext from './MyContext'

const MyState = (props) => {

  
  return (
    <MyContext.Provider value={{}}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState