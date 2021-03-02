/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Obtain users
  getUsers: function() {

    return axios.get("https://randomuser.me/api/?results=100&nat=us");
  }
};
