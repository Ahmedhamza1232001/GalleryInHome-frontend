import React,{useState,useContext,useEffect} from 'react'
import CardData from "./pages/cardData"
const AppContext = React.createContext()

function AppProvider({children}) {
    const [IssearchOpen, setIssearchOpen] = useState(false)
    const [IsSidebarOpen, setISidebarOpen] = useState(false)
    const [users, setUsers] = useState(null)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://galleryinhome.azurewebsites.net/api/Client/GetAll');
          const data = await response.json();
          if (data.success) {
            setProducts(data.data);
          } else {
            console.log('API request failed');
          }
        } catch (error) {
          console.log('Error fetching data from the API', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
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
  // make an object at the local storage for cart items 
  let cart = localStorage.getItem('cartData') ? JSON.parse(localStorage.getItem('cartData')): [];
  localStorage.setItem('cartData', JSON.stringify(cart));
  const addToCart = (e, id) => {
    // toggle classes
    e.target.classList.toggle("fa-shopping-cart")
    e.target.classList.toggle("selceted")
    // add the product to the localstorage
    let product = products.find(product => product.id === id)
    if (e.target.classList.contains("selceted")) {
        cart.push(product)
        localStorage.setItem("cartData",JSON.stringify(cart))
    }
    else {
      cart = cart.filter(p => p.id !== id)
      localStorage.setItem("cartData",JSON.stringify(cart))
    }
  }
  
  // add favorite products to local storage
  let favorite = localStorage.getItem('favData') ? JSON.parse(localStorage.getItem('favData')): [];
  localStorage.setItem('favData', JSON.stringify(favorite));
 
  const addToFav = (e, id) => {
    e.target.classList.toggle('fa');
    e.target.classList.toggle('select');

// add the product to the localstorage
    let product = products.find(product => product.id === id)
    if (e.target.classList.contains("select")) {
        favorite.push(product)
        localStorage.setItem("favData",JSON.stringify(favorite))
    }
    else {
      favorite = favorite.filter(p => p.id !== id)
      localStorage.setItem("favData",JSON.stringify(favorite))
    }
  
  }
 

  return (
    <AppContext.Provider value={{products,loading,users,setUsers,openSearch,closeSearch,IssearchOpen,addToCart,addToFav,IsSidebarOpen,openSideBar,closeSideBar}}>{children}</AppContext.Provider>
  )
}
export const useGlobalContext = () => useContext(AppContext)


export { AppProvider }