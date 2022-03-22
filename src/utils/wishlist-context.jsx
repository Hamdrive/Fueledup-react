import { createContext, useState, useEffect, useContext, useReducer } from "react";

const WishlistContext = createContext(wishlistSpecification)

const useWishlist = () => useContext(WishlistContext)

const WishlistProvider = ({children}) => {

    const [wishlist, setWishlist] = useState(localStorage.getItem("wishlist") || [])

    const [state, dispatch] = useReducer()

    

    return <WishlistContext.Provider>{children}</WishlistContext.Provider>
}