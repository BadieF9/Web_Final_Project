import React, {useState, createContext } from 'react'

export const GridListContext = createContext();

const GridListContextProvider = (props) => {
  const [grid, setGrid] = useState(false)

  return (
    <GridListContext.Provider value={{grid, setGrid}}>
      {props.children}
    </GridListContext.Provider>
  )
}

export default GridListContextProvider
