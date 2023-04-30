import React,{useState,useContext,useEffect} from 'react'

const AppContext = React.createContext()

function AppProvider({children}) {
    const [IssearchOpen, setIssearchOpen] = useState(false)
    const [IsSidebarOpen, setISidebarOpen] = useState(false)
    const [products, setProducts] = useState(null)
    const [users, setUsers] = useState(null)
  
    let jwtTok = sessionStorage.getItem("jwtTok")   
  useEffect(() => {
    const url = "http://localhost:5267/api/Product/GetAllProducts";
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => console.log(err.message))
  }, [jwtTok]);

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
    <AppContext.Provider value={{products,users,setUsers,openSearch,closeSearch,IssearchOpen,IsSidebarOpen,openSideBar,closeSideBar}}>{children}</AppContext.Provider>
  )
}
export const useGlobalContext = () => useContext(AppContext)


export { AppProvider }