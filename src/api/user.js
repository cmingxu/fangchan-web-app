import HTTPApi from "./httpApi";

class User extends HTTPApi {
  accounts = [];
  name = "";
  desc = "";
  city_identity = "";
  favorite_buildings = [];
  favorite_regions = [];
  favorite_circles = [];
  token = "";

  // login with account and password
  // assign active accounts and user
  static login(login, password) {}
  static async async_login(login, password) {
    let body = {
      login: login,
      password: password
    };
    const token = await HTTPApi.post("api/user/login", {}, body);
  }

  // logout current user
  static logout() {}

  async reload_me() {
    let self = this;
    await HTTPApi.get("api/user/me", {}).then(res => {
      let body = res.user;
      self.name = body.name;
      self.desc = body.desc;
      self.city_identity = body.city_identity;
      self.favorite_buildings = body.favorite_buildings;
      self.favorite_circles = body.favorite_circles;
      self.favorite_regions = body.favorite_regions;
    });
  }

  // return all statistics for favorite_buildings
  favorite_building_stats() {}
  // return all statistics for favorite_circles
  favorite_circle_stats() {}
  // return all statistics for favorite_regions
  favorite_region_stats() {}

  update_favorite_buildings(new_favorite_buildings) {
    const params = { building_names: new_favorite_buildings };
    return HTTPApi.post("api/user/update_favorite_buildings", {}, params);
  }
  update_favorite_regions(new_favorite_regions) {
    const params = { region_names: new_favorite_regions };
    return HTTPApi.post("api/user/update_favorite_regions", {}, params);
  }
  update_favorite_circles(new_favorite_circles) {
    const params = { circle_names: new_favorite_circles };
    return HTTPApi.post("api/user/update_favorite_circles", {}, params);
  }
}

User.current_user = new User();

User.isLoggedIn = function() {
  return true;
  // return User.current_user == null;
};

// User.default = new User();

export default User;
