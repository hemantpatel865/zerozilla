import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './navbar'
import { useDispatch } from 'react-redux'
import * as Actions from '../redux/actions/index'


const ProductDetails = (props) => {
    const dispatch = useDispatch()
    const PRODUCT_DATA = useSelector(state => state?.productDetailPage?.productDetails)
    const {image, title, price, description } = PRODUCT_DATA
    const CART_ITEM_COUNT = useSelector(state => state.productDetailPage.cartItemsCount)
    
    const handleAddToCart = () => {
        dispatch(Actions.addToCart(CART_ITEM_COUNT))
    }
  return (
    <>
        <Navbar />
        <div className='product_details container'>
            <div className="wrapper">
                <div className='product_image'>
                    <img src={image} />
                </div>
                <div className='product_info'>
                    <div className='title'>
                        <h2>{title}</h2>
                    </div>
                    <div className='price_cart'>
                        <h3>Rs. {price}</h3>
                        <button onClick={handleAddToCart}>Add to cart</button>
                    </div>
                    <div>
                        <p>Description : {description}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetails