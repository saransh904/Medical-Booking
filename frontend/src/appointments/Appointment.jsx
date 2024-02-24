import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signupImg from '../assets/images/signup.gif';



const Appointment = () => {
  const itemName = "Appointment Booking";
  const itemPrice = 500;
  const [quantity, setQuantity] = useState(1);
  const [finalAmount, setFinalAmount] = useState(itemPrice);

  const [stripe, setStripe] = useState(null);
  
  const navigate = useNavigate();
  const handleNav = () => {
      navigate("/users/profile/me")
  }
  



  const decrement = () => {
    if (quantity <= 1) {
      setQuantity(1);
      setFinalAmount(itemPrice);
    } else if (quantity > 1) {
      setQuantity(quantity - 1);
      setFinalAmount(finalAmount - itemPrice);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
    setFinalAmount(finalAmount + itemPrice);
  };


  //payment integration




  return (
    <section className='px-5 xl:px-0'>
    <div className='max-w-[1170px] mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        {/* ============= img box =============*/}
        <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
          <figure className='rounded-l-lg'>
            <img src={signupImg} alt='' className='w-full rounded-l-lg'></img>
          </figure>
        </div>

        {/*========== Appointment form ==============*/}
        <div className='rounded-l-lg lg:pl-16 py-10'>
          <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>Book your <span className='text-primaryColor'>Appointment</span> Now!!</h3>

          <div className='mb-5'>
            <div className='flex items-center'>
              <button onClick={decrement} className='px-3 py-2 bg-primaryColor text-white rounded-l cursor-pointer'>
                -
              </button>
              <span className='px-4 py-3 border-b border-r border-solid border-primaryColor text-[22px] leading-7 text-headingColor'>
                {quantity}
              </span>
              <button onClick={increment} className='px-3 py-2 bg-primaryColor text-white rounded-r cursor-pointer'>
                +
              </button>
            </div>
          </div>

          <div className='mb-5'>
            <span className='text-headingColor font-bold text-[18px] leading-7'>Total Amount: ${finalAmount}</span>
          </div>

          <div className='mt-7'>
            <button onClick={handleNav} className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Appointment;
