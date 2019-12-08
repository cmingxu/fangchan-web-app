import HTTPApi from "./httpApi";

class Region extends HTTPApi {
  static list(option) {
    return HTTPApi.get("api/regions", option);
  }

  static search(option) {
    return HTTPApi.get("api/regions/search", option);
  }

  static favorite_stats() {
    return HTTPApi.get("api/regions/favorite_stats");
  }
}

export default Region;
