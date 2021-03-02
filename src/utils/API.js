/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // obtain users from Random User API
  getUsers: function() {

    return axios.get("https://randomuser.me/api/?results=25&nat=us");
  }
};
