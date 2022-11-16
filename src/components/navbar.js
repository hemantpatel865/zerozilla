import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import avatar from '../assets/images/avatar.png'
import cart from '../assets/images/cart.png'
import { useDispatch } from 'react-redux'
import * as Actions from '../redux/actions/index'

const Navbar = () => {
    const dispatch = useDispatch()
    const [suggestions, setSuggestions] = useState([])
    const data = useSelector(state => state?.productDetailPage?.allProductsList)
    const CART_ITEM_COUNT = useSelector(state => state.productDetailPage.cartItemsCount)
    
    const filterSugg = (searchVal, data) => {
        let filtered = data.filter(item => {
            if(item.title.toLowerCase().includes(searchVal.toLowerCase())){
               return item
           }
       })
       setSuggestions(filtered)
    }
    const onChange = (searchVal) => {
        dispatch(Actions.getProductsList())
        if(data && data?.length > 0){
            filterSugg(searchVal, data)
        }
        
    }
    
    
    
  return (
    <div>
        <nav className="navbar navbar-light bg-light justify-content-between">
            <Link to={{pathname: "/"}}><span className="navbar-brand">Online Shop</span></Link>
            <div className="input-group" style={{width: "50%", display: "block"}}>
                <div id="search-autocomplete" className="form-outline">
                    <input type="search" id="form1" onChange={(e) => onChange(e.target.value)} className="form-control" />
                    {suggestions && suggestions?.length > 0 &&
                        <div className='suggestions' style={{height: `${suggestions.length > 5 ? "350px" : "auto"}`}}>
                            <ul>
                                {suggestions.map(item => (
                                    <li key={item.id}>{item.title}</li>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
            </div>
            <div className='user-info'>
                <div className='cart-wrapper'>
                    <img className="cart" src={cart} /><span>{CART_ITEM_COUNT}</span>
                </div>
                <Link to={{pathname: "/profile"}}><img className="avatar" src={avatar}/></Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar