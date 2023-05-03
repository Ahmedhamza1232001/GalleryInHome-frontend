import React,{useState,useContext,useEffect} from 'react'
import CardData from "./pages/cardData"
const AppContext = React.createContext()

function AppProvider({children}) {
    const [IssearchOpen, setIssearchOpen] = useState(false)
    const [IsSidebarOpen, setISidebarOpen] = useState(false)
    const [products, setProducts] = useState(CardData)
    const [users, setUsers] = useState(null)
  
  //   let jwtTok = sessionStorage.getItem("jwtTok")   
  // useEffect(() => {
  //   const url = "http://localhost:5267/api/Product/GetAllProducts";
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(res => {
  //       setProducts(res.data)
  //     })
  //     .catch(err => console.log(err.message))
  // }, [jwtTok]);

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
  const cartIcon = (e) => {
    e.target.classList.toggle("fa-shopping-cart")
    e.target.classList.toggle("selceted")

}

  return (
    <AppContext.Provider value={{products,users,setUsers,openSearch,closeSearch,IssearchOpen,cartIcon,IsSidebarOpen,openSideBar,closeSideBar}}>{children}</AppContext.Provider>
  )
}
export const useGlobalContext = () => useContext(AppContext)


export { AppProvider }