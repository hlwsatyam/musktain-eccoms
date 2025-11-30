"use client";
import React from "react";
import { Box, Typography, Divider, Container, List, ListItem } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container sx={{ py: 4, backgroundColor: "#f9f9f9", color: "#333", lineHeight: "1.8" }}>
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 3, textAlign: "center", color: "#d32f2f" }}>
        Privacy Policy for Sohkin Flower Gifts
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, textAlign: "center", fontStyle: "italic" }}>
        Effective Date: January 1, 2024 | Last Updated: January 1, 2024
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, maxWidth: 800, mx: "auto", textAlign: "justify" }}>
        Welcome to Sohkin Flower Gifts ("we," "our," or "us"). We are committed to protecting your privacy and ensuring 
        the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
        your information when you visit our website https://sohkinflowergifts.com/ or make a purchase from us.
      </Typography>

      <Box sx={{ backgroundColor: "#fff8e1", p: 3, borderRadius: 2, mb: 4, border: "1px solid #ffd54f" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#d32f2f" }}>
          Quick Summary
        </Typography>
        <Typography variant="body2">
          • We collect information necessary to process your orders and enhance your experience<br/>
          • We do not sell your personal data to third parties<br/>
          • We implement robust security measures to protect your information<br/>
          • You have rights to access, correct, or delete your personal data<br/>
          • By using our services, you consent to our privacy practices
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        1. Information We Collect
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We collect various types of information to provide and improve our services:
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
        Personal Information
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Contact Details:</strong> Full name, email address, phone number, delivery address
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Payment Information:</strong> Credit/debit card details (processed securely via payment gateways), UPI IDs, wallet information
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Account Information:</strong> Username, password, profile preferences, wish lists
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Recipient Information:</strong> Details of gift recipients including their name, address, and contact information
          </Typography>
        </ListItem>
      </List>

      <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
        Transaction Information
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Order history, purchase details, payment records, delivery status</Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Product preferences, special occasion dates, gift messages</Typography>
        </ListItem>
      </List>

      <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
        Technical Information
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>IP address, browser type, device information, operating system</Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Website usage data, clickstream data, page response times</Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Location data (with your permission) for delivery optimization</Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        2. How We Use Your Information
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Order Processing:</strong> To process and fulfill your orders, arrange deliveries, and send order confirmations
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Customer Service:</strong> To provide support, respond to inquiries, and handle complaints
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Personalization:</strong> To customize product recommendations based on your preferences and purchase history
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Marketing:</strong> To send promotional offers, newsletters, and updates (with your consent)
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Quality Improvement:</strong> To analyze website usage and improve our products and services
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Security:</strong> To detect and prevent fraud, unauthorized transactions, and other illegal activities
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        3. Legal Basis for Processing (GDPR Compliance)
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        For users in the European Economic Area (EEA), we process your personal data based on:
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Contractual Necessity:</strong> To fulfill our contractual obligations when you make a purchase
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Legal Obligation:</strong> To comply with legal and regulatory requirements
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Legitimate Interests:</strong> For business operations, security, and marketing (where appropriate)
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Consent:</strong> For specific purposes where we have obtained your explicit consent
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        4. How We Share Your Information
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We may share your information with:
      </Typography>
      
      <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
        Service Providers
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Payment Processors:</strong> Razorpay, PayPal, Stripe for secure payment processing
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Delivery Partners:</strong> Delivery personnel and logistics companies for order fulfillment
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>IT Service Providers:</strong> Cloud hosting, analytics, and customer support services
          </Typography>
        </ListItem>
      </List>

      <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
        Legal Requirements
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>When required by law, court order, or governmental authority</Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>To protect our rights, property, or safety, or that of our users</Typography>
        </ListItem>
      </List>

      <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
        Business Transfers
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>In connection with a merger, acquisition, or sale of all or portion of our assets</Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        5. Data Security Measures
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We implement comprehensive security measures to protect your data:
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Encryption:</strong> SSL/TLS encryption for data transmission, AES-256 for data at rest
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Access Controls:</strong> Role-based access controls and authentication mechanisms
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Payment Security:</strong> PCI DSS compliant payment processing; we do not store full card details
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Regular Audits:</strong> Security assessments and vulnerability testing
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Employee Training:</strong> Privacy and security awareness training for all staff
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        6. Data Retention
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We retain your personal data only for as long as necessary:
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Active Accounts:</strong> Until you request deletion or account closure
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Order Records:</strong> 7 years for tax and legal compliance purposes
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Marketing Data:</strong> Until consent is withdrawn or 3 years of inactivity
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Customer Service Records:</strong> 3 years from last interaction
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        7. Your Rights and Choices
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        You have the following rights regarding your personal data:
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Access:</strong> Right to know what personal data we hold about you
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Correction:</strong> Right to correct inaccurate or incomplete data
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Deletion:</strong> Right to request deletion of your personal data
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Portability:</strong> Right to receive your data in a structured, machine-readable format
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Objection:</strong> Right to object to certain processing activities
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Withdraw Consent:</strong> Right to withdraw previously given consent
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Marketing Opt-out:</strong> Unsubscribe from marketing communications at any time
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        8. Cookies and Tracking Technologies
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We use cookies and similar technologies for:
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Essential Cookies:</strong> Required for website functionality and security
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Analytical Cookies:</strong> Google Analytics for website performance monitoring
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Marketing Cookies:</strong> For personalized advertising and retargeting
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Preference Cookies:</strong> To remember your settings and preferences
          </Typography>
        </ListItem>
      </List>
      <Typography variant="body1" sx={{ mb: 2 }}>
        You can manage cookie preferences through your browser settings or our cookie consent banner.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        9. International Data Transfers
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards 
        are in place through Standard Contractual Clauses and other approved mechanisms for international data transfers.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        10. Children's Privacy
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Our services are not directed to individuals under 16. We do not knowingly collect personal information from 
        children under 16. If you believe we have collected information from a child, please contact us immediately.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        11. Third-Party Links
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Our website may contain links to third-party sites. This Privacy Policy does not apply to those sites. 
        We encourage you to review the privacy policies of any third-party sites you visit.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        12. Changes to This Privacy Policy
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new 
        policy on our website and updating the effective date. Continued use of our services after changes constitutes 
        acceptance of the updated policy.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        13. Contact Information
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        For privacy-related inquiries or to exercise your rights, please contact:
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Data Protection Officer:</strong><br/>
        Email: dpo@sohkinflowergifts.com<br/>
        Phone: +91-9876543213<br/>
        Address: [Your Complete Business Address]
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        <strong>Grievance Officer (India):</strong><br/>
        Name: Mr. Rajesh Kumar<br/>
        Email: grievance@sohkinflowergifts.com<br/>
        Phone: +91-9876543212
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        <strong>General Support:</strong><br/>
        Email: support@sohkinflowergifts.com<br/>
        Phone: +91-9876543210
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        14. Complaints
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        If you have concerns about our data practices, you may lodge a complaint with your local data protection 
        authority. For Indian users, you may contact the Cyber Cell of your local police department.
      </Typography>

      <Box sx={{ backgroundColor: "#e8f5e8", p: 3, borderRadius: 2, border: "1px solid #4caf50" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#2e7d32" }}>
          Your Privacy Matters
        </Typography>
        <Typography variant="body2">
          We are committed to protecting your privacy and being transparent about our data practices. 
          Thank you for trusting Sohkin Flower Gifts with your personal information.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;