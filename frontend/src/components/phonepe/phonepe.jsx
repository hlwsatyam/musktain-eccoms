import axios from "axios";
const baseUrl ="https://api.fashionneedles.com"
// const baseUrl ="http://localhost:3001"

export const initiatePayment = async (amount,orderId) => {
  try {
    const response = await axios.get(`${baseUrl}/api/pay`, { 
        params: { amount,orderId }
      });

      // Redirect user to the payment URL provided in the response
      if (response.status === 200 && response.data.redirectUrl) {
        window.location.href = response.data.redirectUrl;
      } else {
        setError('Failed to initiate payment');
      }
   
  } catch (error) {
    console.error('Error initiating payment:', error);
    alert('Error initiating payment');
  }
};
