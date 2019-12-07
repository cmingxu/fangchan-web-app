import HTTPApi from "./httpApi";

class Building extends HTTPApi {
  static list(option) {
    return HTTPApi.get("api/buildings", option);
  }

  static search(option) {
    return HTTPApi.get("api/buildings/search", option);
  }
}

export default Building;
