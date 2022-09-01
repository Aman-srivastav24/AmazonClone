import React from 'react'
import '../css/Payment.css'
import {Link} from 'react-router-dom'
import {useStateValue} from '../StateProvider'
import CheckoutProduct from '../components/CheckoutProduct';
function Payment() {
    const[{basket,user},dispatch]=useStateValue();
  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
            Checkout(<Link to='/checkout'>{basket?.length} items</Link>)
            </h1>
            {/* delevery address */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 React lane</p>
                    <p>Amsterdem , CA</p>
                </div>
            </div>
            {/* review items */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and Delivery</h3>
                </div>
                <div className='payment__items'>
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
            {/* payment method */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    {/* stripes magic will go  */}

                </div>
            </div>
        </div>
    </div>

  )
}

export default Payment