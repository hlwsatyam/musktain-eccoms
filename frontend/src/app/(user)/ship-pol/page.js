"use client";
import React from "react";
import { Box, Typography, Divider, Container, List, ListItem, Chip } from "@mui/material";

const ShippingPolicy = () => {
  return (
    <Container sx={{ py: 4, backgroundColor: "#f9f9f9", color: "#333", lineHeight: "1.8" }}>
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 3, textAlign: "center", color: "#d32f2f" }}>
        Shipping & Delivery Policy
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, textAlign: "center", fontStyle: "italic" }}>
        Effective Date: January 1, 2024 | Last Updated: January 1, 2024
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, maxWidth: 800, mx: "auto", textAlign: "justify" }}>
        At Sohkin Flower Gifts, we understand the importance of timely delivery for your special occasions. 
        We are committed to ensuring that your fresh flowers, cakes, and gifts reach you in perfect condition and on time.
      </Typography>

      <Box sx={{ backgroundColor: "#e8f5e8", p: 3, borderRadius: 2, mb: 4, border: "1px solid #4caf50" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#2e7d32" }}>
          🚚 Quick Delivery Overview
        </Typography>
        <Typography variant="body2">
          • Same-day delivery available in Kalna and surrounding areas<br/>
          • Free shipping on orders above ₹799<br/>
          • Real-time order tracking<br/>
          • Special handling for fresh flowers and cakes<br/>
          • Contactless delivery option available
        </Typography>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        1. Delivery Areas & Coverage
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        We currently deliver to the following areas:
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#d32f2f" }}>
          Primary Service Area (Same-Day Delivery)
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          <Chip label="Kalna" color="primary" />
          <Chip label="Khalishpur" color="primary" />
          <Chip label="Chowghuria" color="primary" />
          <Chip label="Purbasthali" color="primary" />
          <Chip label="Memari" color="primary" />
          <Chip label="Burdwan" color="primary" />
        </Box>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#d32f2f" }}>
          Extended Service Area (Next-Day Delivery)
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Chip label="Katwa" variant="outlined" />
          <Chip label="Bhatar" variant="outlined" />
          <Chip label="Guskara" variant="outlined" />
          <Chip label="Ausgram" variant="outlined" />
          <Chip label="Khandaghosh" variant="outlined" />
        </Box>
      </Box>

      <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 2 }}>
        Note: For delivery outside these areas, please contact us at 8369132009 for custom delivery arrangements.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        2. Delivery Timeframes
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Same-Day Delivery:</strong> Orders placed before 2:00 PM will be delivered the same day. 
            Delivery between 4:00 PM - 8:00 PM.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Next-Day Delivery:</strong> Orders placed after 2:00 PM will be delivered the next day.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Express Delivery (4-hour):</strong> Available for urgent orders at extra cost. 
            Orders must be placed before 5:00 PM.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Pre-Scheduled Delivery:</strong> You can schedule delivery for future dates (up to 30 days in advance).
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        3. Shipping Charges
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Free Shipping:</strong> On all orders above ₹799
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Standard Delivery:</strong> ₹49 for orders below ₹799 within Kalna city limits
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Extended Area Delivery:</strong> ₹79 for surrounding areas (up to 15km radius)
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Express Delivery:</strong> Additional ₹99 for 4-hour delivery service
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Midnight Delivery:</strong> Special charges apply for deliveries between 10:00 PM - 6:00 AM
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        4. Order Processing & Cut-off Times
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Order Verification:</strong> All orders are verified within 30 minutes of placement
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Preparation Time:</strong> 1-2 hours for standard orders, 30 minutes for express orders
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Weekend Orders:</strong> We deliver 7 days a week, including Sundays and holidays
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Festive Seasons:</strong> During peak seasons (Valentine's Day, Durga Puja, etc.), 
            delivery times may extend by 1-2 hours
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        5. Product-Specific Handling
      </Typography>
      
      <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
        Fresh Flowers
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Temperature-controlled transportation during extreme weather</Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Special packaging to prevent damage during transit</Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Water tubes for cut flowers to maintain freshness</Typography>
        </ListItem>
      </List>

      <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
        Cakes & Edible Items
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Secure packaging to prevent damage</Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Level surface transportation</Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Insulated boxes during summer months</Typography>
        </ListItem>
      </List>

      <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2, mb: 1 }}>
        Gift Hampers & Fragile Items
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Bubble wrapping for fragile items</Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Special handling instructions for delivery personnel</Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        6. Delivery Process
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Order Confirmation:</strong> You will receive SMS/WhatsApp confirmation within 30 minutes
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Dispatch Notification:</strong> Notification when your order leaves our facility
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Real-time Tracking:</strong> Live tracking link shared via WhatsApp/SMS
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Delivery Attempt:</strong> We make 2 delivery attempts. If unsuccessful, 
            we'll contact you to reschedule
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Contactless Delivery:</strong> Available on request. Photos of delivered items will be shared
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        7. Delivery Instructions & Special Requests
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Provide specific landmarks for easy location</Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Mention gate codes, floor numbers, or special access requirements</Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Specify if the delivery is a surprise - we'll be discreet</Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Provide alternative contact numbers for delivery assistance</Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        8. Failed Deliveries & Rescheduling
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Recipient Unavailable:</strong> We'll attempt contact and wait for 15 minutes
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Incorrect Address:</strong> Contact us immediately at 8369132009 to update address
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Rescheduling:</strong> Free rescheduling up to 2 hours before delivery time
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>
            <strong>Cancellation:</strong> Orders can be cancelled within 30 minutes of placement
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        9. Weather & Unforeseen Circumstances
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Delivery may be delayed during heavy rain, storms, or political unrest</Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>We'll notify you immediately of any delays and provide revised timelines</Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Safety of our delivery personnel and your products is our priority</Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2, mb: 1, color: "#d32f2f" }}>
        10. Quality Check & Customer Satisfaction
      </Typography>
      <List>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>All products undergo quality check before dispatch</Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Delivery personnel are trained in product handling</Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item', mb: 1 }}>
          <Typography>Follow-up call to ensure satisfaction with delivery</Typography>
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ backgroundColor: "#fff8e1", p: 3, borderRadius: 2, border: "1px solid #ffd54f" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#d32f2f" }}>
          Need Help With Delivery?
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Call us at: <strong>8369132009</strong> (8:00 AM - 9:00 PM)
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          WhatsApp: <strong>8369132009</strong> (24/7 for urgent delivery issues)
        </Typography>
        <Typography variant="body2">
          Email: <strong>sohkinflowergifts@gmail.com</strong>
        </Typography>
      </Box>

      <Typography variant="body2" sx={{ mt: 3, textAlign: "center", fontStyle: "italic", color: "#666" }}>
        Note: This shipping policy is subject to change. Please check back periodically for updates.
      </Typography>
    </Container>
  );
};

export default ShippingPolicy;