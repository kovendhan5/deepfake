// src/utils/sendEmail.js
import axios from 'axios';

const sendEmailAlert = (email, videoDetails) => {
  axios.post('/api/send-email', { email, videoDetails })
    .then(response => console.log("Email sent:", response))
    .catch(error => console.error("Error sending email:", error));
};
