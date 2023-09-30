import { createContext, useState } from "react";

export let GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {


      let [state, setState] = useState(false);

      let handleMode = () => {
        setState(!state);
      };


    return <GlobalContext.Provider value={{state, handleMode}}>{children}</GlobalContext.Provider>
}

export default GlobalContextProvider;