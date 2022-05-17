import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemQuantity, decreaseItemQuantity, addWishlist, removeItem } from '../../Redux/Actions'
// import { addItemQuantity, decreaseItemQuantity, addWishlist, removeItem } from '../../../store/actions/shoppingCart'


const Product = ({ data, index }) => {
  const dispatch = useDispatch()
  const [toDelete, setToDelete] = useState(false)
  const { id, name, type, price, producent, notes, qty, image, max, wishlisted } = data
  
  const addProductQtyHandler = () => {
    dispatch(addItemQuantity(index))
  }

  const removeProductQtyHandler = () => {
    dispatch(decreaseItemQuantity(index))
  }

  const wishlistHandler = () => {
    dispatch(addWishlist(index))
  }

  const removeItemHandler = () => {
    setToDelete(true)
    setTimeout(() => {
      dispatch(removeItem(id))
      setToDelete(false)
    }, 300)
  }

  return (
    <div key={id} className={`flex justify-between flex-col lg:flex-row space-y-4 lg:space-y-0 transition-opacity ease-in-out duration-700 ${toDelete ? ' opacity-0 ' : 'opacity-100'}`}>
      <div className='space-y-4 lg:space-y-0 lg:space-x-4 flex flex-col lg:flex-row'>
        <img style={{ content: `url(${image})` }} alt='img-product' className='w-full lg:w-48' />
        <div className='space-y-6'>
          <div className='space-y-2'>
            <h3 className='text-gray-800 text-xl font-semibold'>{name}</h3>
            <p className='text-sm text-gray-600'>{type}</p>
            <p className='text-sm text-gray-600'>from {producent}</p>
            <p className='text-gray-600'>${Number(price).toFixed(2)} <span className='text-sm'>/ kg</span></p>
          </div>
          <div className='flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 text-gray-600 '>
            <div onClick={removeItemHandler} className='flex items-center space-x-1 text-xs lg:text-sm hover:text-gray-400 cursor-pointer'>
              <span>
                <i className="fas fa-trash"></i>
              </span>
              <p>REMOVE ITEM</p>
            </div>
            <div onClick={wishlistHandler} className={wishlisted ? 'flex items-center space-x-1 text-xs lg:text-sm text-red-600 cursor-pointer' : 'flex items-center space-x-1 text-xs lg:text-sm hover:text-red-600 cursor-pointer'}>
              <span>
                <i className="fas fa-heart"></i>
              </span>
              <p>{wishlisted ? "REMOVE FROM WISHLIST" : "MOVE TO WISHLIST"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-row lg:flex-col justify-between items-center lg:items-end'>
        <div className='flex flex-col items-center'>
          <div className='flex items-center text-gray-800 text-xs lg:text-base '>
            <div onClick={removeProductQtyHandler} className={qty === 1 ? 'cursor-not-allowed flex justify-center w-10 h-full items-center p-2 hover:bg-gray-50 border rounded-l-md text-gray-500' : 'cursor-pointer flex justify-center w-10 h-full items-center p-2 hover:bg-gray-200 border rounded-l-md'}>
              <span >
                <i className="fas fa-minus"></i>
              </span>
            </div>
            <div className='flex justify-center w-12 h-full items-center p-2 border-t border-b'>
              {qty}
            </div>
            <div onClick={addProductQtyHandler} className={max === qty ? 'cursor-not-allowed flex justify-center w-10 h-full items-center p-2 hover:bg-gray-50 border rounded-r-md text-gray-500' : 'cursor-pointer flex justify-center w-10 h-full items-center p-2 hover:bg-gray-200 border rounded-r-md'}>
              <span>
                <i className="fas fa-plus"></i>
              </span>
            </div>
          </div>
          <p className='text-xs text-gray-600 mt-2'>(Note, {notes})</p>
        </div>
        <p className='items-center text-gray-800 text-right text-lg font-semibold'>${Number(price * qty).toFixed(2)}</p>
      </div>

    </div>
  )
}

export default Product