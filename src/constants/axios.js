import axios from "axios";

export const baseURL = "https://bootcamp.akbolat.net";
export default axios.create({baseURL});

export const URL = {
  categories: '/categories',
  register: '/auth/local/register',  
  login: '/auth/local',
  users: '/users',
  usersMe:'/users/me',
  usersPermissionsRoles: '/users-permissions/roles',
}