import HTTPApi from "./httpApi";

class Circle extends HTTPApi {
  static list(option) {
    return HTTPApi.get("api/circles", option);
  }

  static search(option) {
    return HTTPApi.get("api/circles/search", option);
  }

  static favorite_stats() {
    return HTTPApi.get("api/circles/favorite_stats");
  }
}

export default Circle;
