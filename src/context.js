import React,{useState,useContext,useEffect} from 'react'

const AppContext = React.createContext()

function AppProvider({children}) {

  const [products, setProducts] = useState(null)
  let jwtTok = sessionStorage.getItem("jwtTok")   
  useEffect(()=>{
        fetch("http://localhost:5267/api/Product/GetAllProducts")
        .then(res=>res.json())
        .then(data=>{
          setProducts(data.data)})
        .catch(err=>console.log(err.message))
    },[jwtTok])
    

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
    <AppContext.Provider value={{products,openSearch,closeSearch,IssearchOpen,IsSidebarOpen,openSideBar,closeSideBar}}>{children}</AppContext.Provider>
  )
}
export const useGlobalContext = () => useContext(AppContext)


export { AppProvider }