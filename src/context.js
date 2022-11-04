import React,{useState,useContext} from 'react'

const AppContext = React.createContext()

function AppProvider({children}) {
    const [IssearchOpen, setIssearchOpen] = useState(false)
    const [IsSidebarOpen, setISidebarOpen] = useState(false)

    const openSearch=()=>{
        setIssearchOpen(true)
    }
    const closeSearch=()=>{
        setIssearchOpen(false)
    }
    const openSideBar =()=>{
      setISidebarOpen(true)
    }
    const closeSideBar =()=>{
      setISidebarOpen(false)
    }
  return (
    <AppContext.Provider value={{openSearch,closeSearch,IssearchOpen,IsSidebarOpen,openSideBar,closeSideBar}}>{children}</AppContext.Provider>
  )
}
export const useGlobalContext = () => useContext(AppContext)


export { AppProvider }