import HTTPApi from "./httpApi";

class Batch extends HTTPApi {
  static list(option) {
    return HTTPApi.get("api/batches", option);
  }

  static search(option) {
    return HTTPApi.get("api/batches/search", option);
  }
}

export default Batch;
