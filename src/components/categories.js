import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryName } from '../redux/actions'

const Categories = ({data}) => {
    const dispatch = useDispatch()
    const CATEGORY_NAME = useSelector((state) => state?.homepage?.category)
    const handleClick = (cat) => {
        dispatch(setCategoryName(cat))
    }
  return (
    <div className='categories'>
        {data && data.map((item) => {
            
          return (
            <div className={CATEGORY_NAME == item ? "category-box active" : "category-box"} key={item} onClick={() => handleClick(item)}>{item.toUpperCase()}</div>
          )
        })}
      </div>
  )
}

export default Categories