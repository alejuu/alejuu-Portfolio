import React from 'react'

import { BackgroundSVGSpring } from '../components/Animations/IndexAnimations'

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  theme: 'light'
}

function reducer(state, action) {
  switch(action.type) {
    // case 'TOGGLE_THEME' : {
    //   return {
    //     ...state,
    //     theme: state.theme === 'light' ? 'dark' : 'light'
    //   }
    // }
    default:
      throw new Error('Bad Action Type')
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        <BackgroundSVGSpring />
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider