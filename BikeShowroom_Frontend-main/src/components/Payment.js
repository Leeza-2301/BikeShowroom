// import React from 'react';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate,useLocation } from 'react-router-dom';
// import RazorpayPayment from './RazorpayPayment'; 
// import '../style_components/Payment.css'
// function Payment() {
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
//   // Access price from location.state
//   const { priceDisp, price, color, brand, model,pic } = location.state || {};

//   const handlePaymentSuccess = (paymentId) => {
//     console.log('Payment successful. Payment ID:', paymentId);
//   };

//   return (
//     <div>
//       <h2 className='paymenth2'>Purchase Confirmation</h2>
//       <div >
//         {isAuthenticated ? (
//           <div className="payment-container">
//             <div><img className="payment-image" src={pic} alt="bike" /></div>
//             <div>
//               <h3>Brand: {brand}</h3>
//               <h3>Model: {model}</h3>
//               <h3>Variant : {color}</h3>
//               <h3>Price : ₹ {priceDisp}</h3>

//               <RazorpayPayment amount={price} onSuccess={handlePaymentSuccess} />
//               <h3>Customer Details :</h3>
//               <h3>Name : Deep</h3>
//               <h3>Mobile No. 1234567890</h3>
//               <h3>Address : "Guru Ashish"</h3>
//             </div>
//           </div>
//         ) : (
//           <div className="unauthenticated-message">
//             <p>You need to be authenticated to make a payment.</p>
//             <button onClick={() => navigate('/signup')}>Signup</button>
//           </div>
//         )}  
//       </div>
//     </div>
//   );
// }

// export default Payment;




import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import RazorpayPayment from './RazorpayPayment'; 
import '../style_components/Payment.css';

function Payment() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // Access price from location.state
  const { priceDisp, price, color, brand, model, pic } = location.state || {};
  
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);

  const handleToggleCustomerDetails = () => {
    setShowCustomerDetails(prevState => !prevState);
  };

  const handlePaymentSuccess = (paymentId) => {
    console.log('Payment successful. Payment ID:', paymentId);
  };

  return (
    <div>
      <h2 className='paymenth2'>Purchase Confirmation</h2>
      <div>
        {isAuthenticated ? (
          <div className="payment-container">
            <div><img className="payment-image" src={pic} alt="bike" /></div>
            <div>
              <h3>Brand: {brand}</h3>
              <h3>Model: {model}</h3>
              <h3>Variant : {color}</h3>
              <h3>Price : ₹ {priceDisp}</h3>

              <RazorpayPayment amount={price} onSuccess={handlePaymentSuccess} />
              
              <button onClick={handleToggleCustomerDetails}>
                {showCustomerDetails ? 'Hide' : 'Show'} Customer Details
              </button>
              
              {showCustomerDetails && (
                <div className="customer-details">
                  <h3>Customer Details :</h3>
                  <h3>Name : Deep</h3>
                  <h3>Mobile No. 9726654347</h3>
                  <h3>Address : "rajkot ho "</h3>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="unauthenticated-message">
            <p>You need to be authenticated to make a payment.</p>
            <button onClick={() => navigate('/signup')}>Signup</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
