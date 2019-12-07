import HTTPApi from "./httpApi";

class User extends HTTPApi {
  accounts = [];
  name = "";
  desc = "";
  city_identity = "";
  favorite_buildings = [];
  favorite_regions = [];
  favorite_circles = [];

  // login with account and password
  // assign active accounts and user
  static login(account, password) {}

  // logout current user
  static logout() {}

  // return all statistics for favorite_buildings
  favorite_building_stats() {}
  // return all statistics for favorite_circles
  favorite_circle_stats() {}
  // return all statistics for favorite_regions
  favorite_region_stats() {}

  update_favorite_buildings(new_favorite_buildings) {}
  update_favorite_regions(new_favorite_regions) {}
  update_favorite_circles(new_favorite_circles) {}
}

User.current_user = {};

User.isLoggedIn = function() {
  return false;
  // return User.current_user == null;
};

export default User;
