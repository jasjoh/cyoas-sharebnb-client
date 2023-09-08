import axios from "axios";

const BASE_URL = "http://localhost:5001";

class ShareBnbApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  static token = "";

  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  //   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  //   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${ShareBnbApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on all listings. */
  /** Create a listing */
  /** Delete a listing */



  /** Get a list of all listings*/
  static async getAllListings() {
    const data = await this.request(`properties`);
    console.log("retrieved properties:", data);
    return data.properties;
  }

  /** Create a listing */

  static async createListing(formData){
    const data = await this.request(`properties`, formData, 'post');
    return data.property;
  }

  /** Delete a listing */

  static async deleteListing(propertyId){
    const data = await this.request(`properties/${propertyId}`,'delete');
    return data.message;
  }


}
export default ShareBnbApi;