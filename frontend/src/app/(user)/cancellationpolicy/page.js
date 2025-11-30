"use client";
import React from "react";
import { Box, Typography, List, ListItem, Divider, Container } from "@mui/material";

const CancellationPolicy = () => {
  return (
    <Container sx={{ py: 4, backgroundColor: "#f9f9f9", color: "#333", lineHeight: "1.8" }}>
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 3, textAlign: "center", color: "#d32f2f" }}>
        Sohkin Flower Gifts Cancellation, Return & Refund Policy
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: 800, mx: "auto", textAlign: "justify" }}>
        Welcome to Sohkin Flower Gifts! We specialize in delivering fresh flowers, exquisite gifts, and delicious cakes 
        to make your special moments memorable. Due to the perishable nature of our products, we have specific policies 
        for cancellations, returns, and refunds. Please read this policy carefully before placing your order.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        1. Order Cancellations
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We understand that circumstances may change, but due to the fresh nature of our products, we have strict cancellation timelines:
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Standard Orders:</strong> Orders can be cancelled within 30 minutes of placement without any charges. 
            After 30 minutes, if the order has entered the preparation stage, cancellation may not be possible.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Same-Day Delivery Orders:</strong> For same-day delivery orders, cancellation is only possible within 
            15 minutes of order placement. After this period, the order enters immediate preparation and cannot be cancelled.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Pre-Orders & Advance Orders:</strong> Orders placed for future dates can be cancelled up to 24 hours 
            before the scheduled delivery date. Cancellations within 24 hours may incur a 25% processing fee.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Customized Arrangements:</strong> Bespoke floral arrangements, personalized gifts, or custom cake orders 
            cannot be cancelled once the customization process has begun (typically 2 hours after order confirmation).
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Cancellation Process:</strong> To cancel an order, please call our customer service at +91-9876543210 
            or email us at support@sohkinflowergifts.com with your order number. Verbal cancellations are not accepted.
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        2. Return & Exchange Policy
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Due to the perishable nature of our products, our return and exchange policy is designed to ensure freshness while protecting customer interests:
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Fresh Flowers:</strong> As flowers are natural, perishable products, we do not accept returns or exchanges 
            for fresh floral arrangements unless they arrive damaged, wilted, or significantly different from what was ordered. 
            Claims must be made within 4 hours of delivery with photographic evidence.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Cakes & Edible Items:</strong> Cakes and other edible items cannot be returned or exchanged for hygiene reasons. 
            If you receive a damaged cake or incorrect flavor, please contact us within 2 hours of delivery with photos for resolution.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Gift Items & Non-Perishables:</strong> Non-perishable gift items (vases, teddy bears, decorative items) 
            can be returned within 7 days of delivery provided they are unused, in original packaging, and with all tags attached.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Defective or Damaged Items:</strong> If you receive damaged, defective, or incorrect items, please notify us 
            within 24 hours of delivery. We will arrange for replacement or provide a full refund, including return shipping costs.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Return Process:</strong> To initiate a return, email us at returns@sohkinflowergifts.com with your order number, 
            photos of the issue, and a detailed description. Our quality team will review and respond within 24 hours.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Return Shipping:</strong> For eligible non-perishable returns, customers are responsible for return shipping costs 
            unless the return is due to our error. We provide prepaid return labels for defective items.
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        3. Refund Policy
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We process refunds promptly for eligible cases. Here are the details of our refund procedure:
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Refund Eligibility:</strong> Refunds are provided for cancelled orders (within allowed timeframes), 
            damaged/defective products, undelivered orders, or significant quality issues verified by our team.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Refund Time Frame:</strong> Once a refund is approved, it is processed within 24 hours. The refund 
            amount will reflect in your account within 5-7 business days for card payments and 1-2 business days for UPI/Wallet payments.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Refund Method:</strong> Refunds are issued to the original payment method used for purchase. 
            For cash on delivery orders, we process refunds via bank transfer or company cheque within 7-10 business days.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Partial Refunds:</strong> Partial refunds may be issued in cases where only part of the order is unsatisfactory, 
            or for minor issues that don't warrant full replacement but still affect customer satisfaction.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Non-Refundable Items:</strong> Customized products, personalized items, gift wrapping charges, 
            and delivery fees for completed deliveries are non-refundable.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Late Delivery Refunds:</strong> If delivery is delayed beyond the promised timeframe and the delay is from our end, 
            we offer a 20% refund of the product value or a voucher for future purchases.
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        4. Quality Assurance & Freshness Guarantee
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We take pride in delivering premium quality products:
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Flower Freshness:</strong> We guarantee that all flowers are fresh at the time of delivery and will 
            last for a minimum of 5-7 days with proper care. Specific care instructions are provided with each delivery.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Cake Quality:</strong> Our cakes are baked fresh on the day of delivery using premium ingredients. 
            We maintain strict hygiene standards in our kitchen facilities.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Delivery Standards:</strong> Our delivery executives are trained to handle products with care and 
            ensure timely delivery while maintaining product integrity.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Temperature Control:</strong> For cakes and sensitive floral arrangements, we use temperature-controlled 
            delivery vehicles during extreme weather conditions to maintain product quality.
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        5. Shipping & Delivery Policy
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Our delivery network ensures your gifts reach on time:
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Delivery Areas:</strong> We deliver across major cities in India including Delhi NCR, Mumbai, Bangalore, 
            Chennai, Kolkata, Hyderabad, Pune, and 200+ other cities. International delivery available to USA, UK, UAE, and 50+ countries.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Delivery Timeframes:</strong> Same-day delivery available for orders placed before 2:00 PM in metro cities. 
            Standard delivery within 24 hours for most locations. Express delivery (4-6 hours) available at extra cost.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Shipping Charges:</strong> Free shipping on orders above ₹1499. Standard shipping charges: ₹99 within city limits, 
            ₹149 for inter-city deliveries. International shipping charges vary by destination.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Delivery Attempts:</strong> We make two delivery attempts. If both attempts fail, the order will be returned 
            to our facility and a restocking fee of 30% may be deducted from the refund.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Address Changes:</strong> Delivery address can be changed up to 3 hours before the scheduled delivery time, 
            subject to service availability in the new location.
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        6. Special Circumstances
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Festive Seasons:</strong> During peak seasons (Valentine's Day, Mother's Day, Diwali, etc.), 
            cancellation and return policies may be modified with advance notice on our website.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Force Majeure:</strong> We are not liable for delays or cancellations due to circumstances beyond our 
            control including natural disasters, strikes, political unrest, or extreme weather conditions.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Recipient Unavailability:</strong> If the recipient is unavailable at the delivery address, our delivery 
            executive will attempt to contact them. After two failed attempts, the order may be returned with applicable charges.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Corporate Orders:</strong> Bulk corporate orders have separate cancellation and return terms as specified 
            in the corporate agreement.
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        7. Customer Support & Grievance Redressal
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We are committed to resolving your concerns promptly:
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Contact Channels:</strong> Phone: +91-9876543210 (9:00 AM - 8:00 PM), Email: support@sohkinflowergifts.com, 
            WhatsApp: +91-9876543211 (24/7 for urgent delivery issues)
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Response Time:</strong> We acknowledge all queries within 2 hours and provide resolution within 24 hours 
            for standard issues, 4 hours for urgent delivery-related matters.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Grievance Officer:</strong> Mr. Rajesh Kumar, Email: grievance@sohkinflowergifts.com, 
            Phone: +91-9876543212 (10:00 AM - 6:00 PM, Monday to Saturday)
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Escalation Process:</strong> If unsatisfied with initial resolution, you may escalate to our Grievance Officer 
            who will address your concern within 3 working days.
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ backgroundColor: "#fff8e1", p: 3, borderRadius: 2, border: "1px solid #ffd54f" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#d32f2f" }}>
          Important Notes:
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          • This policy is effective from 1st January 2024 and supersedes all previous versions
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          • We reserve the right to modify this policy at any time. Changes will be effective immediately upon posting on our website
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          • In case of any dispute, the decision of Sohkin Flower Gifts management shall be final and binding
        </Typography>
        <Typography variant="body2">
          • This policy is governed by the laws of India and any disputes shall be subject to the exclusive jurisdiction of courts in New Delhi
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ mt: 4, textAlign: "center", fontStyle: "italic" }}>
        Thank you for choosing Sohkin Flower Gifts. We value your trust and are committed to providing you with exceptional service.
      </Typography>
    </Container>
  );
};

export default CancellationPolicy;