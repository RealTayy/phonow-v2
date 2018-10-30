// import axios from "axios";
import * as menu from '../assets/data/menu.json';
import * as categories from '../assets/data/categories.json';

// Currently uses static data instead of data from DB. Implement DB/CMS in furture version
export default {
  // Get menu items from DB
  // Currently using static data
  getMenu: function () {
    const menuPromise = new Promise((resolve, reject) => {
      resolve(menu);
      reject(new Error('how did you get here lol'));
    })
    return menuPromise;
  },
  // Get categories from DB
  // Currently using static data
  getCategories: function () {
    const categoriesPromise = new Promise((resolve, reject) => {
      resolve(categories);
      reject(new Error('how did you get here lol'));
    })
    return categoriesPromise;
  },
  sendEmail: function (emailData) {
    return axios.post("/api/email", emailData);
  }

};
