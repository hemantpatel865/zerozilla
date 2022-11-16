import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as Actions from '../redux/actions/index'

const Products = ({data}) => {
    const dispatch = useDispatch()
    const handleClick = (data) => {
        dispatch(Actions.setProductDetails(data))
    }
  return (
    <div className='container-fluid'>
        <div className="products_wrapper">
            {data && data?.length > 0 ?
                data?.map(item => {
                    return (
                        <div className='product_box' key={item?.id} onClick={() => handleClick(item)}>
                            <Link to={{pathname: "/productDetails"}}>
                                <img src={item?.image} />
                                <div className="info">
                                    <h2 className='title'>{item?.title}</h2>
                                    <p className='desc'>{item?.description}</p>
                                    <span className='price'>Rs. {item?.price}</span>
                                </div>
                            </Link>
                        </div>
                    )
                }) :
                <p >No products found</p>       
            }
        </div>
    </div>
  )
}

export default Products