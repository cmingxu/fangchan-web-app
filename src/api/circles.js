import HTTPApi from "./httpApi";

class Circle extends HTTPApi {
  static list(option) {
    return HTTPApi.get("api/circles", option);
  }

  static search(option) {
    return HTTPApi.get("api/circles/search", option);
  }
}

export default Circle;
