
import axios from "axios";

 const baseURL = "http://localhost:3000/Accounts"

 export const fetchAccountants = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data; // Returns the accountants list
  } catch (error) {
    console.error('Error fetching accountants:', error);
    throw error; // Ensures calling code handles the error
  }
};

export const fetchAccountantDetails = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data; // Returns details of a single accountant
  } catch (error) {
    console.error('Error fetching accountant details:', error);
    throw error;
  }
};