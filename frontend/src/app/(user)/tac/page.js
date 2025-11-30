import React from 'react';
import { Container, Typography, Box, Divider, Link } from '@mui/material';

const termsAndConditions = [
  {
    title: "1. Introduction",
    content: "Welcome to Sohkin Flower Gifts (hereinafter referred to as 'we', 'us', 'our', or 'Sohkin Flower Gifts'). These Terms and Conditions govern your use of our website https://sohkinflowergifts.com/ and all related services, including but not limited to the purchase of flowers, gifts, cakes, and related products. By accessing our website and making a purchase, you agree to be bound by these Terms and Conditions."
  },
  {
    title: "2. Acceptance of Terms",
    content: "By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services."
  },
  {
    title: "3. Modification of Terms",
    content: "Sohkin Flower Gifts reserves the right to modify, amend, or update these Terms and Conditions at any time without prior notice. The updated version will be posted on our website with the effective date. Your continued use of the website after any changes constitutes your acceptance of the modified terms."
  },
  {
    title: "4. Eligibility",
    content: "You must be at least 18 years of age to use our services and make purchases. By using this website, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into binding contracts."
  },
  {
    title: "5. Account Registration",
    content: "To access certain features, you may be required to create an account. You agree to provide accurate, current, and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account."
  },
  {
    title: "6. Products and Services",
    content: "Sohkin Flower Gifts offers fresh flowers, gift items, cakes, and related products. Product images on the website are for illustrative purposes only. Actual products may vary in color, size, or appearance. We reserve the right to modify product offerings, prices, and specifications without prior notice."
  },
  {
    title: "7. Order Placement and Acceptance",
    content: "All orders are subject to product availability and our acceptance. We reserve the right to refuse or cancel any order for any reason, including but not limited to product unavailability, pricing errors, or suspected fraudulent activity. Order confirmation does not constitute acceptance; acceptance occurs when the order is shipped."
  },
  {
    title: "8. Pricing and Payment",
    content: "All prices are listed in Indian Rupees (₹) unless otherwise specified. Prices are subject to change without notice. We accept the following payment methods: Credit Cards, Debit Cards, UPI, Net Banking, and PayPal. By providing payment information, you represent that you are authorized to use the payment method."
  },
  {
    title: "9. Payment Gateway Security",
    content: "We use secure payment gateways that comply with PCI DSS standards. All payment transactions are encrypted using SSL technology. Sohkin Flower Gifts does not store your complete payment card details on our servers. Payment information is processed through certified payment processors."
  },
  {
    title: "10. Shipping and Delivery",
    content: "We offer delivery services across India and selected international locations. Delivery times may vary based on location and product availability. Same-day delivery is available in selected cities for orders placed before 11:00 AM. We are not responsible for delays caused by third-party delivery services or unforeseen circumstances."
  },
  {
    title: "11. Cancellation Policy",
    content: "Orders can be cancelled within 30 minutes of placement, provided the order has not entered the preparation process. For custom orders or special arrangements, cancellation may not be possible once preparation has begun. To cancel an order, please contact our customer service immediately."
  },
  {
    title: "12. Return and Refund Policy",
    content: "Due to the perishable nature of our products, fresh flowers cannot be returned or refunded unless they arrive damaged or defective. For non-perishable gift items, returns are accepted within 7 days of delivery, provided the item is in its original condition with tags attached. Refunds will be processed within 7-10 business days after return approval."
  },
  {
    title: "13. Quality Assurance",
    content: "We guarantee the freshness and quality of our flowers at the time of delivery. Flowers are natural products and may have variations in color, size, and appearance. While we strive to match product images exactly, some variations may occur due to seasonal availability."
  },
  {
    title: "14. Intellectual Property Rights",
    content: "All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Sohkin Flower Gifts or its content suppliers and is protected by Indian and international copyright laws. The 'Sohkin Flower Gifts' name and logo are registered trademarks."
  },
  {
    title: "15. User Conduct",
    content: "You agree not to use the website for any unlawful purpose or in any way that could damage, disable, overburden, or impair the website. You may not use automated systems, bots, or scrapers to access, monitor, or copy any content from the website."
  },
  {
    title: "16. Privacy Policy",
    content: "Your privacy is important to us. Please refer to our Privacy Policy for information about how we collect, use, and protect your personal information. By using our services, you consent to our collection and use of personal information as described in the Privacy Policy."
  },
  {
    title: "17. Limitation of Liability",
    content: "To the maximum extent permitted by law, Sohkin Flower Gifts shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or products. Our total liability for any claim shall not exceed the purchase price of the product in question."
  },
  {
    title: "18. Indemnification",
    content: "You agree to indemnify, defend, and hold harmless Sohkin Flower Gifts, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses arising from your use of the website, violation of these Terms, or infringement of any rights of another party."
  },
  {
    title: "19. Governing Law and Jurisdiction",
    content: "These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, India."
  },
  {
    title: "20. Force Majeure",
    content: "Sohkin Flower Gifts shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, civil unrest, strikes, natural disasters, pandemics, or government restrictions."
  },
  {
    title: "21. Severability",
    content: "If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect."
  },
  {
    title: "22. Entire Agreement",
    content: "These Terms and Conditions, together with our Privacy Policy and Return Policy, constitute the entire agreement between you and Sohkin Flower Gifts regarding your use of our website and services, superseding any prior agreements or understandings."
  },
  {
    title: "23. Contact Information",
    content: "For any questions, concerns, or complaints regarding these Terms and Conditions, please contact us at: Email: support@sohkinflowergifts.com | Phone: +91 836 913 2009 | Address: Vill- CHOWGHURIA, P.O- KHALISH PUR, P.S- KALNA, DIST- PURBA BARDHAMAN, EEST BENGAL, 713422"
  },
  {
    title: "24. Grievance Officer",
    content: "In accordance with Indian IT Act, 2000, the Grievance Officer for Sohkin Flower Gifts is: Name: Mustkain | Email: grievance@sohkinflowergifts.com | Address: Vill- CHOWGHURIA, P.O- KHALISH PUR, P.S- KALNA, DIST- PURBA BARDHAMAN, EEST BENGAL, 713422"
  }
];

const TermsPage = () => {
  return (
    <Container sx={{ py: 4, maxWidth: 'lg' }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ 
        fontWeight: 'bold', 
        color: '#d32f2f',
        mb: 4 
      }}>
        Terms and Conditions
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 4, fontStyle: 'italic' }}>
        Last Updated: {new Date().toLocaleDateString('en-IN', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom color="primary">
          Important Notice
        </Typography>
        <Typography variant="body1" paragraph>
          Please read these Terms and Conditions carefully before using our website or making a purchase. 
          These terms contain important information about your rights and obligations, as well as limitations 
          and exclusions that may apply to you.
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {termsAndConditions.map((term, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ 
            fontWeight: '600',
            color: '#d32f2f',
            fontSize: '1.4rem'
          }}>
            {term.title}
          </Typography>
          <Typography variant="body1" sx={{ 
            lineHeight: 1.7,
            textAlign: 'justify'
          }}>
            {term.content}
          </Typography>
          {index < termsAndConditions.length - 1 && <Divider sx={{ mt: 3 }} />}
        </Box>
      ))}

      <Box sx={{ 
        mt: 6, 
        p: 3, 
        backgroundColor: '#f5f5f5', 
        borderRadius: 2,
        border: '1px solid #e0e0e0'
      }}>
        <Typography variant="h6" gutterBottom color="primary">
          Acknowledgement
        </Typography>
        <Typography variant="body1">
          By using Sohkin Flower Gifts services, you acknowledge that you have read, understood, 
          and agree to be bound by these Terms and Conditions. If you do not agree with any part 
          of these terms, please discontinue use of our services immediately.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsPage;