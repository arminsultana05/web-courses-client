import React, { useEffect } from 'react';
import { useState } from 'react';
import './Checkout.css'
import Swal from 'sweetalert2'

const Checkout = () => {
    const handleToast =()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your payment has been made successfully',
            showConfirmButton: false,
            timer: 1500
          })
    }


    return (
        <div className='mid-container'>
            <section class="component">
                <div class="total">
                    <h3>TOTAL</h3>
                    <p>187,00 €</p>
                </div>
                <div class="credit-card">
                    <h2>Credit card</h2>
                    <form>
                        <input className='input-filed' type="text" placeholder="NAME" />
                        <div class="line"><input type="text" placeholder="CARD" /> <input type="text" placeholder="NUMBER" /> <input type="text" /> <input type="text" /></div>
                        <div class="line">
                            <input class="litle input-filed'" type="text" placeholder="EXPIRY" />
                            <input class="tall input-filed'" type="text" placeholder="CCV" />
                        </div>
                        <button onClick={handleToast} type="submit" class="valid-button">PROCEED TO CHECKOUT</button>
                    </form>
                </div>
            </section>




        </div>
    );
};

export default Checkout;
