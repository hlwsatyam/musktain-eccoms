const express = require('express');
const router = express.Router();
const orderRoutes = require('../controllers/order');
// Import verifyToken function
const verifyToken = require('../config/jwt');
const { customerPaymentStatus } = require('../config/phonepe');
const Orders = require('../models/Order');
//user routes
router.post('/orders', orderRoutes.createOrder);

 

// Add this route in your orders routes
router.post('/verify-razorpay', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = req.body;

    // Verify signature
    const crypto = require('crypto');
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest('hex');

    if (expectedSignature === razorpay_signature) {
      // Update order status
      await Orders.findByIdAndUpdate(orderId, {
        paymentStatus: 'done',
        status: 'confirmed',
        paymentId: razorpay_payment_id
      });

      res.json({
        success: true,
        message: 'Payment successful'
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Payment verification failed'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error verifying payment'
    });
  }
});


 


//Payment Status Check
router.get('/paymentsuccess/:txnId', customerPaymentStatus);

router.get('/orders/:id', orderRoutes.getOrderById);
 

//admin routes
router.get('/admin/orders', verifyToken, orderRoutes.getOrdersByAdmin);
router.get('/admin/orders/:id', verifyToken, orderRoutes.getOneOrderByAdmin);
router.put('/admin/orders/:id', verifyToken, orderRoutes.updateOrderByAdmin);
router.delete('/admin/orders/:id', verifyToken, orderRoutes.deleteOrderByAdmin);

module.exports = router;
