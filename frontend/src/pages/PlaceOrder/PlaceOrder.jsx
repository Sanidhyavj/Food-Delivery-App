import React from 'react'
import './PlaceOrder.css'
const PlaceOrder = () => {
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'> <b>Delivery Information</b></p>
        <div className="multi-fields">
          <input type="text" placeholder='Name' />
        </div>
        <input type="email" placeholder='email' />
        <input type="text" placeholder='Address' />
        <input type="text" placeholder='City' />
        <input type="text" placeholder='State' />
      </div>  
      <div className="place-order-right">
      <button>PROCEED</button>
      </div>
    </form>
  )
}

export default PlaceOrder
