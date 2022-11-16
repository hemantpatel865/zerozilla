import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import banner from '../../assets/images/banner.png'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../../redux/actions'
import Categories from '../../components/categories'
import Products from '../../components/products'


const Home = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState()
  const CATEGORIES_LIST = useSelector((state) => state?.homepage?.categoriesList)
  const PRODUCTS_LIST = useSelector((state) => state?.homepage?.productsList)
  const CATEGORY_NAME = useSelector((state) => state?.homepage?.category)
  
  useEffect(() => {
    dispatch(Actions.getCategories())
  }, [])
  
  useEffect(() => {
    if(CATEGORIES_LIST?.length > 0){
      dispatch(Actions.setCategoryName(CATEGORIES_LIST[0]))
    }
  },[CATEGORIES_LIST])
  
  useEffect(() => {
    if(CATEGORY_NAME){
      dispatch(Actions.getProductsByCategory(CATEGORY_NAME))
    }
  }, [CATEGORY_NAME])

  return (
    <>
      <Navbar />
      <div className='banner'>
        <img src={banner}/>
      </div>
      <Categories data={CATEGORIES_LIST}/>
      <Products data={PRODUCTS_LIST}/>
    </>

  )
}

export default Home