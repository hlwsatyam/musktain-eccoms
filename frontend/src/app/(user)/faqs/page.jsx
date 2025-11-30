import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  { 
    question: "Sohkin Flower Gifts क्या है?", 
    answer: "Sohkin Flower Gifts फूलों, तोहफों और केक का एक प्रमुख ऑनलाइन स्टोर है जहाँ आप ताज़े फूल, सुंदर गिफ्ट हॅम्पर और स्वादिष्ट केक ऑर्डर कर सकते हैं।" 
  },
  { 
    question: "मैं ऑर्डर कैसे प्लेस करूं?", 
    answer: "हमारे कलेक्शन को ब्राउज़ करें, अपनी पसंद के आइटम्स चुनें और चेकआउट प्रक्रिया को पूरा करें। आप फोन पर ऑर्डर करने के लिए हमें कॉल भी कर सकते हैं।" 
  },
  { 
    question: "आप कौन-से भुगतान के तरीके स्वीकार करते हैं?", 
    answer: "हम क्रेडिट कार्ड, डेबिट कार्ड, UPI, नेट बैंकिंग और PayPal स्वीकार करते हैं।" 
  },
  { 
    question: "क्या आप अंतर्राष्ट्रीय शिपिंग ऑफर करते हैं?", 
    answer: "हाँ, हम दुनिया के कई देशों में शिपिंग करते हैं। डिलीवरी का समय और शुल्क लोकेशन पर निर्भर करता है।" 
  },
  { 
    question: "मैं अपने ऑर्डर को कैसे ट्रैक करूं?", 
    answer: "एक बार आपका ऑर्डर शिप हो जाने के बाद, आपको ईमेल के जरिए एक ट्रैकिंग लिंक भेजा जाएगा।" 
  },
  { 
    question: "आपकी रिटर्न पॉलिसी क्या है?", 
    answer: "फूल प्रोडक्ट्स की प्रकृति के कारण, हम ताज़े फूलों को वापस नहीं लेते हैं। गिफ्ट आइटम्स और केक के लिए, यदि कोई समस्या है तो कृपया डिलीवरी के 24 घंटे के भीतर कस्टमर सर्विस से संपर्क करें।" 
  },
  { 
    question: "डिलीवरी में कितना समय लगता है?", 
    answer: "समान शहर में डिलीवरी आमतौर पर 3-4 घंटे में हो जाती है। अन्य शहरों के लिए 24-48 घंटे लग सकते हैं।" 
  },
  { 
    question: "क्या मैं अपना ऑर्डर बदल या कैंसल कर सकता हूं?", 
    answer: "आप ऑर्डर प्लेस करने के 30 मिनट के भीतर इसे बदल या कैंसल कर सकते हैं, बशर्ते ऑर्डर तैयारी/शिपिंग की प्रक्रिया में न हो।" 
  },
  { 
    question: "क्या आप गिफ्ट कार्ड्स ऑफर करते हैं?", 
    answer: "हाँ, हमारी वेबसाइट पर गिफ्ट कार्ड्स उपलब्ध हैं।" 
  },
  { 
    question: "अगर मुझे खराब आइटम मिले तो क्या करूं?", 
    answer: "कृपया तुरंत कस्टमर सर्विस से संपर्क करें। हम आपके आइटम को रिप्लेस कर देंगे।" 
  },
  { 
    question: "कस्टमर सर्विस से कैसे संपर्क करूं?", 
    answer: "आप हमारी वेबसाइट पर कॉन्टैक्ट फॉर्म के जरिए, ईमेल पर, या फोन नंबर पर संपर्क कर सकते हैं।" 
  },
  { 
    question: "क्या आप फ्री शिपिंग ऑफर करते हैं?", 
    answer: "हाँ, ₹2000 या उससे अधिक के ऑर्डर पर फ्री शिपिंग उपलब्ध है।" 
  },
  { 
    question: "क्या आप P.O. Boxes पर शिप करते हैं?", 
    answer: "नहीं, हम P.O. Boxes पर शिपिंग नहीं करते क्योंकि हमें प्रॉडक्ट्स की सही और समय पर डिलीवरी सुनिश्चित करनी होती है।" 
  },
  { 
    question: "फूलों की फ्रेशनेस कितने दिन तक रहती है?", 
    answer: "हमारे फूल 5-7 दिनों तक ताज़े रहते हैं। उचित देखभाल से आप इनकी लाइफ बढ़ा सकते हैं।" 
  },
  { 
    question: "क्या मैं केक और फूलों का कॉम्बो ऑर्डर कर सकता हूं?", 
    answer: "हाँ, हम केक और फूलों के विशेष कॉम्बो पैक ऑफर करते हैं जो आपकी विशेष अवसरों के लिए परफेक्ट हैं।" 
  },
  { 
    question: "क्या आप सेम-डे डिलीवरी ऑफर करते हैं?", 
    answer: "हाँ, हम सेम-डे डिलीवरी ऑफर करते हैं। समान शहर में सुबह 11 बजे तक का ऑर्डर उसी दिन डिलीवर कर दिया जाता है।" 
  },
  { 
    question: "क्या आप मिडनाइट डिलीवरी ऑफर करते हैं?", 
    answer: "हाँ, हम सेलेक्टेड शहरों में मिडनाइट डिलीवरी ऑफर करते हैं।" 
  },
  { 
    question: "क्या मैं ऑर्डर में पर्सनलाइज्ड मैसेज जोड़ सकता हूं?", 
    answer: "हाँ, आप चेकआउट के दौरान पर्सनलाइज्ड मैसेज जोड़ सकते हैं जो आपके गिफ्ट के साथ भेजा जाएगा।" 
  },
  { 
    question: "क्या आप कॉर्पोरेट गिफ्टिंग सर्विसेज ऑफर करते हैं?", 
    answer: "हाँ, हम कॉर्पोरेट गिफ्टिंग और बल्क ऑर्डर के लिए विशेष सर्विसेज ऑफर करते हैं। कृपया हमारी कॉर्पोरेट टीम से संपर्क करें।" 
  },
];

const FAQPage = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ 
        fontWeight: 'bold', 
        color: '#d32f2f',
        mb: 4 
      }}>
        Frequently Asked Questions
      </Typography>
      <Grid container spacing={2}>
        {faqs.map((faq, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Accordion sx={{ 
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              '&:before': { display: 'none' },
              borderRadius: '8px !important',
              mb: 1
            }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#d32f2f' }} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  backgroundColor: '#fafafa',
                  borderRadius: '8px',
                  '&:hover': { backgroundColor: '#f5f5f5' }
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: '600', fontSize: '1rem' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: '#fff', borderRadius: '0 0 8px 8px' }}>
                <Typography sx={{ color: '#555', lineHeight: 1.6 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FAQPage;