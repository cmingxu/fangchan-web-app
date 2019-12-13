import CONFIG from "../config";
import queryString from "query-string";

class HTTPApi {
  constructor() {}
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

  static default_headers(headers = {}) {
    let default_headers = {
      "Content-Type": "application/json",
      Token: CONFIG.accountToken
    };

    // if (User.current_user) {
    //   headers.Token = User.current_user.token;
    // }
    return Object.assign(default_headers, headers);
  }

  static get(path, option = null) {
    let query = option ? option.query : {};
    let headers = option ? option.headers : {};
    return fetch(HTTPApi.pathWithQuery(path, query), {
      method: "GET",
      headers: HTTPApi.default_headers(headers)
    }).then(response => response.json());
  }

  static post(path, option, body) {
    let query = option ? option.query : {};
    let headers = option ? option.headers : {};
    return fetch(HTTPApi.pathWithQuery(path, query), {
      method: "POST",
      headers: HTTPApi.default_headers(headers),
      body: JSON.stringify(body)
    }).then(response => response.json());
  }
}

export default HTTPApi;
