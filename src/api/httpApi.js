import CONFIG from "../config";
import queryString from "query-string";

class HTTPApi {
  static pathWithQuery(path, query) {
    if (query) {
      return (
        CONFIG.baseURI +
        path +
        "?" +
        queryString.stringify(query, { arrayFormat: "bracket" })
      );
    } else {
      return CONFIG.baseURI + path;
    }
  }

  static get(path, option) {
    return fetch(HTTPApi.pathWithQuery(path, option.query), {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json());
  }

  static post(path, option, body) {
    return fetch(HTTPApi.pathWithQuery(path, option.query), {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json());
  }
}

export default HTTPApi;
