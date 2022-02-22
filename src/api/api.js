import * as axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/";
const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: {
    "API-KEY": "1c09534b-45f1-4b87-95dd-0212c239967f",
  },
});

export const Users = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  deleteFollowUser(id = 10) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },

  postFollowUser(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
};
export const Auth = {
  getAuthMe() {
    return instance.get(`auth/me`).then((response) => response.data.data);
  },
};

export const Profile = {
  getUserProfile(id) {
    return instance.get(`profile/${id}`).then((response) => response.data);
  },

  getUserStatus(id) {
    return instance
      .get(`profile/status/${id}`)
      .then((response) => response.data);
  },

  updateStatus(status) {
    return instance.put(`status`, { status: status });
  },
};
