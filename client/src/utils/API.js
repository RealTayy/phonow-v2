import axios from "axios";

export default {
  // Saves a book to the database
  sendEmail: function (emailData) {
    return axios.post("/api/email", emailData);
  }
};
