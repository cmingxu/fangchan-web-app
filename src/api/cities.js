import HTTPApi from "./httpApi";

class City extends HTTPApi {
  static list(option) {
    return HTTPApi.get("api/cities", option);
  }

  static search(option) {
    return HTTPApi.get("api/cities/search", option);
  }

  static stats(option) {
    return HTTPApi.get("api/cities/stats", option);
  }

  static trendings(city_identity = "bj") {
    return HTTPApi.get(
      "api/cities/trending?city_identity=" + city_identity,
      {}
    );
  }
}

export default City;
