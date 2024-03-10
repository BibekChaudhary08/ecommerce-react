import React from 'react'
import MyContext from './MyContext'

const MyState = ({children}) => {
    const name = "Bibek Chaudhari"
  return (
    <MyContext.Provider value = {name}>
        {children}
    </MyContext.Provider>
    
  )
}

export default MyState