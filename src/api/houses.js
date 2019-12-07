import HTTPApi from "./httpApi";

class House extends HTTPApi {
  static list(option) {
    return HTTPApi.get("api/houses", option);
  }

  static search(option) {
    return HTTPApi.get("api/houses/search", option);
  }
}

export default House;
