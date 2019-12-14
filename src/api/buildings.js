import HTTPApi from "./httpApi";

class Building extends HTTPApi {
  static list(option) {
    return HTTPApi.get("api/buildings", option);
  }

  static search(option) {
    return HTTPApi.get("api/buildings/search", option);
  }

  static favorite_stats() {
    return HTTPApi.get("api/buildings/favorite_stats");
  }
  static trendings(name = "望京SOHO") {
    return HTTPApi.get("api/buildings/trending?building_name=" + name);
  }
}

export default Building;
