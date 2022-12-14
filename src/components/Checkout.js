import React from 'react'
import '../css/Checkout.css'
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue
  ();
  return (
    <div className='checkout'>
    <div className="checkout__left">
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
        <div className="checkout__title">
            <h2>Shopping Basket</h2>
            {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
    </div>
    <div className="checkout__right">
        <Subtotal/>
        
    </div>
    </div>
  )
}

export default Checkout